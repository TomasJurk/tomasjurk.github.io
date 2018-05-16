'use strict';

window.addEventListener('keydown', function(e) {

    e.preventDefault();

    document.getElementById('keyCode').innerHTML = e.keyCode;

    if (e.keyCode === 32) {
        document.getElementById('keyCodeValue').innerHTML = "Space";
    } else {
        document.getElementById('keyCodeValue').innerHTML = e.key;
    }

});