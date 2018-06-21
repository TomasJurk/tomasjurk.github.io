'use strict';

let moviesContainer = document.querySelector('.container');
let cardLength;

function scrollMovies(x) {
    cardLength = document.querySelector('.card').offsetWidth + 16;
    moviesContainer.scrollTo(cardLength*x, 0);
}


setInterval(scrollMovies(), 1000);


/* for (let i = 0; i < 10; i+=2) {
    if(i == 6) {
        scrollMovies(400*i);
        console.log('working');
    }
    
} */