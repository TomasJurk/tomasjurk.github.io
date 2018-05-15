'use strict';

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

let headerLetters = document.querySelectorAll('.random-color');

let formFillError = document.querySelector('.msgNotSent');
let formFillSuccess = document.querySelector('.msgSent');

let userName = document.getElementById('nameInput');
let userEmail = document.getElementById('emailInput');
let userPhone = document.getElementById('phNumberInput');
let userMessage = document.getElementById('messageInput');
let sendRequestBtn = document.getElementById('btn-send');

let isDataSent = false;

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

for (let i = 0; i < headerLetters.length; i++) {
    headerLetters[i].addEventListener('mouseover', () => {
        headerLetters[i].setAttribute('style', `color: ${getRandomColor()};`);
    });
    headerLetters[i].addEventListener('mouseout', () => {
        headerLetters[i].removeAttribute('style');
    });
}

sendRequestBtn.addEventListener('mouseup', function() {
    let data = {
        user: userName.value,
        email: userEmail.value,
        phone: userPhone.value,
        message: userMessage.value,
        time: new Date().getTime()
    }
    if(data.user.length > 1 && data.email.length > 1 && data.phone.length > 1 && data.message.length > 3 && isDataSent === false) {
        firestore.collection('Requests').add(data).then(
            formFillError.removeAttribute('style'),
            formFillSuccess.style.display='block',
            userName.value = '',
            userEmail.value = '',
            userPhone.value = '',
            userMessage.value = '',
            isDataSent = true,
            setTimeout(() => {
                formFillSuccess.removeAttribute('style');
                isDataSent = false;
            }, 5000)
        );
    } else {
        formFillSuccess.removeAttribute('style');
        formFillError.style.display='block';
    }
});





