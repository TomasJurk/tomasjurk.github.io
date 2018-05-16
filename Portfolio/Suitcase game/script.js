'use strict';

let timer;
let timer2;
let gameTime;

let btnBig = document.getElementById('btnBig');
let btnBigPaspaudimuSk = 0;
let bulbBig = document.getElementById('bulbBig');
let buttonsSmallTop = document.querySelectorAll('.btnUp');
let buttonsSmallCount = 0;
let smallBulbs = document.querySelectorAll('.bulb-small');
let buttonsSmallBottom = document.querySelectorAll('.btnSmUp');
let buttonsSmallCount2 = 0;
let kortele1 = document.querySelector('.itemBottom');
let kortele2 = document.querySelector('.itemUp');
let numPad = document.querySelectorAll('.num');
let numCount = 0;
let korteleMain = document.querySelector('.winImg');

let pictureOnHand = false;


window.onload = function() {
    timer = new Date();
};

// Kombinacija didelio bygtuko ir uzdegimas dideles lempos
btnBig.addEventListener('click', function() {

    if (btnBigPaspaudimuSk == 7) {
        bulbBig.classList.add('bulb-active');
        btnBigPaspaudimuSk++;
    } else if (btnBigPaspaudimuSk > 7) {
        bulbBig.classList.remove('bulb-active');
        //Isjungia viska
        smallBulbs.forEach(e => {
            e.classList.remove('bulb-active');
        });
        kortele1.classList.remove('itemBottom--turned');
        kortele1.innerHTML = '';
        kortele2.classList.remove('itemUp--turned');
        numPad.forEach(e => {
            e.classList.remove('num--active');
        });
        korteleMain.classList.remove('winImg--turned');
        buttonsSmallTop.forEach(e => {
            e.classList.remove('btn-active');
        });
        buttonsSmallBottom.forEach(e => {
            e.classList.remove('btn-active');            
        });
        btnBigPaspaudimuSk = 0;
        buttonsSmallCount = 0;
        buttonsSmallCount2 = 0;
        numCount = 0;
    } else {
        btnBigPaspaudimuSk++;
    }
});

// Kombinacija 4 raudonu mygtuku, atrakina piesini Nr1
for (let i = 0; i < 4; i++) {

    buttonsSmallTop[i].addEventListener('click', function() {

        if (this.classList.contains('btn-active')) {
            this.classList.remove('btn-active');
            buttonsSmallCount = buttonsSmallCount - Number(this.getAttribute('value'));
        } else {
            this.classList.add('btn-active');
            buttonsSmallCount = buttonsSmallCount + Number(this.getAttribute('value'));
        }

        if (buttonsSmallCount == 12) {
            smallBulbs.forEach(e => { // sutrumpinimas smallBulbs.forEach(function(e) {})
                e.classList.add('bulb-active');
            });

            kortele1.classList.add('itemBottom--turned');
            kortele1.innerHTML = '<p>Prisimink skaičius</p>';
        } else if (buttonsSmallCount > 12) {
            //Isjungia viska
            bulbBig.classList.remove('bulb-active');
            smallBulbs.forEach(e => {
                e.classList.remove('bulb-active');
            });
            kortele1.classList.remove('itemBottom--turned');
            kortele1.innerHTML = '';
            kortele2.classList.remove('itemUp--turned');
            numPad.forEach(e => {
                e.classList.remove('num--active');
            });
            korteleMain.classList.remove('winImg--turned');
            buttonsSmallTop.forEach(e => {
                e.classList.remove('btn-active');
            });
            buttonsSmallBottom.forEach(e => {
                e.classList.remove('btn-active');            
            });
            btnBigPaspaudimuSk = 0;
            buttonsSmallCount = 0;
            buttonsSmallCount2 = 0;
            numCount = 0;
        } else {
            smallBulbs.forEach(e => {
                e.classList.remove('bulb-active');
            });
            kortele1.classList.remove('itemBottom--turned');
            kortele1.innerHTML = '';
        }

    });
}

// Kombinacija 9 raudonu mygtuku, atrakina piesini Nr2
for (let i = 0; i < 9; i++) {

    buttonsSmallBottom[i].addEventListener('click', function() {

        if (this.classList.contains('btn-active')) {
            this.classList.remove('btn-active');
            buttonsSmallCount2 = buttonsSmallCount2 - Number(this.getAttribute('value'));
        } else {
            this.classList.add('btn-active');
            buttonsSmallCount2 = buttonsSmallCount2 + Number(this.getAttribute('value'));
        }

        if (buttonsSmallCount2 == 1092) {
            kortele2.classList.add('itemUp--turned');
        } else if (buttonsSmallCount2 > 1092) {
            //Isjungia viska
            bulbBig.classList.remove('bulb-active');
            smallBulbs.forEach(e => {
                e.classList.remove('bulb-active');
            });
            kortele1.classList.remove('itemBottom--turned');
            kortele1.innerHTML = '';
            kortele2.classList.remove('itemUp--turned');
            numPad.forEach(e => {
                e.classList.remove('num--active');
            });
            korteleMain.classList.remove('winImg--turned');
            buttonsSmallTop.forEach(e => {
                e.classList.remove('btn-active');
            });
            buttonsSmallBottom.forEach(e => {
                e.classList.remove('btn-active');            
            });
            btnBigPaspaudimuSk = 0;
            buttonsSmallCount = 0;
            buttonsSmallCount2 = 0;
            numCount = 0;
        } else {
            kortele2.classList.remove('itemUp--turned');
        }

    });
}

// Patikrinimas ar viskas atrakinta, jei taip, tada leidzia spausti skaicius ir atrakina pagrindini
for (let i = 0; i < 16; i++) {

    numPad[i].addEventListener('click', function() {

        if (kortele2.classList.contains('itemUp--turned') && kortele1.classList.contains('itemBottom--turned') && bulbBig.classList.contains('bulb-active')) {

            if (this.classList.contains('num--active')) {
                this.classList.remove('num--active');
                numCount = numCount - Number(this.getAttribute('value'));
            } else {
                this.classList.add('num--active');
                numCount = numCount + Number(this.getAttribute('value'));
            }

            if (numCount == 1983) {
                korteleMain.classList.add('winImg--turned');
            } else if (numCount > 1983) {
                //Isjungia viska
                bulbBig.classList.remove('bulb-active');
                smallBulbs.forEach(e => {
                    e.classList.remove('bulb-active');
                });
                kortele1.classList.remove('itemBottom--turned');
                kortele1.innerHTML = '';
                kortele2.classList.remove('itemUp--turned');
                numPad.forEach(e => {
                    e.classList.remove('num--active');
                });
                korteleMain.classList.remove('winImg--turned');
                buttonsSmallTop.forEach(e => {
                    e.classList.remove('btn-active');
                });
                buttonsSmallBottom.forEach(e => {
                    e.classList.remove('btn-active');            
                });
                btnBigPaspaudimuSk = 0;
                buttonsSmallCount = 0;
                buttonsSmallCount2 = 0;
                numCount = 0;
            } else {
                korteleMain.classList.remove('winImg--turned');
            }

        }

    });

}


kortele2.addEventListener('mousedown', function(e) {
    pictureOnHand = true;    
    kortele2.classList.add('itemUp--picked');
    let x = e.clientX;
    let y = e.clientY;
    
    window.addEventListener('mousemove', function(e) {
        if (pictureOnHand /* && kortele2.classList.contains('itemUp--turned') */) {
            let x = e.clientX;
            let y = e.clientY;
            
            kortele2.style.left = (x - 95) + 'px';
            kortele2.style.top = (y - 95) + 'px';
      
            let coords = kortele2.getBoundingClientRect();
            let top = coords.top;
            let bot = coords.bottom;
            let rgt = coords.right;
            let lft = coords.left;

            let coordsTarget = korteleMain.getBoundingClientRect();
            let topTarget = coordsTarget.top;
            let botTarget = coordsTarget.bottom;
            let rgtTarget = coordsTarget.right;
            let lftTarget = coordsTarget.left;
           
            if (top >= topTarget && bot <= botTarget && rgt <= rgtTarget && lft >= lftTarget && korteleMain.classList.contains('winImg--turned')) {
                korteleMain.classList.add('winImg--hovered');
            } else {
                korteleMain.classList.remove('winImg--hovered');
            }
        }

        kortele2.addEventListener('mouseup', function(e) {
            kortele2.classList.remove('itemUp--picked');
            kortele2.removeAttribute("style");
            korteleMain.classList.remove('winImg--hovered');
            pictureOnHand = false;
        })
    })  
})

// Leimejus ismetamas pranesimas su laiku
kortele2.addEventListener('mouseup', function() {

    if (korteleMain.classList.contains('winImg--turned') && korteleMain.classList.contains('winImg--hovered')) {
        timer2 = new Date();
        gameTime = timer2 - timer;
        let h = (((gameTime / 1000) / 3600) % 60).toFixed(0);
        let m = (((gameTime / 1000) / 60) % 60).toFixed(0);
        let s = ((gameTime / 1000) % 60).toFixed(0);
        alert('You won! Your time: ' + h + ':' + m + ':' + s);
    }

})
