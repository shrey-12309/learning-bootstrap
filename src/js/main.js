// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

import { Tooltip, Toast, Popover } from 'bootstrap';

const form = document.getElementById("subscribe-form");
const pop = document.getElementById("pop-up");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let nameInput = document.getElementById("Name");
    let emailInput = document.getElementById("Email");

    let subscribeName = nameInput.value.trim();
    let subscribeEmail = emailInput.value.trim();


    nameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");

    let isValid = true;

    if (!validateName(subscribeName)) {
        nameInput.classList.add("input-error");
        isValid = false;
    }

    if (!validateEmail(subscribeEmail)) {
        emailInput.classList.add("input-error");
        isValid = false;
    }

    if (!isValid) return;

    showpopup();
});


function validateName(name) {
    const regexName = /^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/;
    return regexName.test(name);
}

function validateEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}

function showpopup() {
    pop.style.display = "block";
    void pop.offsetWidth;
    pop.classList.add("show");

    setTimeout(() => {
        pop.classList.remove("show");
        setTimeout(() => {
            pop.style.display = "none";
        }, 500);
    }, 2500);
}


