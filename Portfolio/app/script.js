'use strict';


let moviesContainer = document.querySelector('.container');
let cardLength;


function supportsFlexBox() {
	var test = document.createElement('test');

	test.style.display = 'flex';

	return test.style.display === 'flex';
}

// setInterval(scrollMovies(), 1000);
