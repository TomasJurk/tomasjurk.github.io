'use strict';

var moviesContainer = document.querySelector('.container');

var genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]

var request = new XMLHttpRequest();

/* if (window.XDomainRequest) request = new XDomainRequest();
else if (window.XMLHttpRequest) request = new XMLHttpRequest();
else request = new ActiveXObject("Microsoft.XMLHTTP"); */

console.log(request);
request.open('POST', 'https://api.themoviedb.org/3/movie/top_rated?api_key=d3f09dc36b7dfd2241af1d67612a5679&language=en-US&page=1', true);
// request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
request.onload = function () {

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
		console.log(data.results);
		createEmelents(data.results);
  } else {
    console.log('error');
  }
}

// get genre - genres[genres.findIndex(x => x.id == 10749)].name returns 'Romance'
// Padaryti zhanru parodyma
// padaryti auto slideri
// uzbaigti stailus

function createEmelents(movies) {
	for (var i = 0; i < movies.length; i++) {
		var newEl = document.createElement('div');
		newEl.classList.add('card');
		var newElContent = '<div class="card-header"><img src="http://image.tmdb.org/t/p/w300/' + movies[i].backdrop_path + 
		'" alt="Movie image"><div class="card-header_right"><h3>' + movies[i].title + '</h3><p>genre, genre</p><button>more</button></div></div><div class="card-body"><div class="movie-rating"><img src="img/star.png" alt="Rating star"><h3>' + movies[i].vote_average + '</h3></div><div class="movie-descr"><p>' + movies[i].overview + '</p></div></div>';

		// Zemiau kodas neveikia ant visu Internet Exlorer. Didesniam projektui galima butu naudoti konvertavimo biblioteka.
 		/* var newElContent = `
			<div class="card-header">
				<img src="http://image.tmdb.org/t/p/w300/${movies[i].backdrop_path}" alt="Movie image">
				<div class="card-header_right">
					<h3>${movies[i].title}</h3>
					<p>genre, genre</p>
					<button>more</button>
				</div>
			</div>
			<div class="card-body">
				<div class="movie-rating">
					<img src="img/star.png" alt="Rating star">
					<h3>${movies[i].vote_average}</h3>
				</div>
				<div class="movie-descr">
					<p>${movies[i].overview}</p>
				</div>
			</div>
		`; */
		newEl.innerHTML = newElContent;
		moviesContainer.appendChild(newEl);
	}
}

request.send();