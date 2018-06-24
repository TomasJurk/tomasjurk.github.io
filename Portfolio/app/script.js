'use strict';

if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function indexOf(member, startFrom) {
	  if (this == null) {
		throw new TypeError("Array.prototype.indexOf() - can't convert `" + this + "` to object");
	  }
  
	  var
		index = isFinite(startFrom) ? Math.floor(startFrom) : 0,
		that = this instanceof Object ? this : new Object(this),
		length = isFinite(that.length) ? Math.floor(that.length) : 0;
  
	  if (index >= length) {
		return -1;
	  }
  
	  if (index < 0) {
		index = Math.max(length + index, 0);
	  }
  
	  if (member === undefined) {
		do {
		  if (index in that && that[index] === undefined) {
			return index;
		  }
		} while (++index < length);
	  } else {
		do {
		  if (that[index] === member) {
			return index;
		  }
		} while (++index < length);
	  }
  
	  return -1;
	};
  }

/////////////////////////////// TODO ////////////////////////////////////////////////
// get genre - genres[genres.findIndex(x => x.id == 10749)].name returns 'Romance'
// Padaryti zhanru parodyma
// padaryti auto slideri
// Uzbaigti stailus

var moviesContainer = document.querySelector('.container');

var genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];

var isIE = /*@cc_on!@*/false || !!document.documentMode;

var url = "http://api.themoviedb.org/3/movie/top_rated?api_key=d3f09dc36b7dfd2241af1d67612a5679&language=en-US&page=1";

var request = new XMLHttpRequest();

request.open('GET', url, true);
request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

if(isIE) {
	request.onreadystatechange = function () {
		console.log('ar esi cia? Cia IE');
	
		var data = JSON.parse(this.responseText);
	
		if (request.status >= 200 && request.status < 400) {
			console.log(data.results);
			createEmelents(data.results);
		} else {
			console.log('error');
		}
	}
} else {
	request.onload = function () {
		console.log('ar esi cia? KITAS BROUSERIS');
	
		var data = JSON.parse(this.response);
	
		if (request.status >= 200 && request.status < 400) {
			console.log(data.results);
			createEmelents(data.results);
		} else {
			console.log('error');
		}
	}
}


function createEmelents(movies) {
	for (var i = 0; i < movies.length; i++) {
		var newEl = document.createElement('div'), name, arr;
		name = "card";
		arr = newEl.className.split(" ");
		if (arr.indexOf(name) == -1) {
			newEl.className += " " + name;
		}
	
		var newElContent = '<div class="card-header"><img src="http://image.tmdb.org/t/p/w300/' + movies[i].backdrop_path + 
		'" alt="Movie image"><div class="card-header_right"><h3>' + movies[i].title + '</h3><p>genre, genre</p><button>more</button></div></div><div class="card-body"><div class="movie-rating"><img src="img/star.png" alt="Rating star"><h3>' + movies[i].vote_average + '</h3></div><div class="movie-descr"><p>' + movies[i].overview + '</p></div></div>';

		// Struktura FYI, neveikia ant IE backticks.
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
console.log('End of script');