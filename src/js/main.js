// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

const form = document.getElementById("subscribe-form");

form.addEventListener('submit', function (event) {
    event.preventDefault();


    let subscribeName = document.getElementById("Name").value.trim();
    let subscribeEmail = document.getElementById("Email").value.trim();


    if (!validateName(subscribeName)) {
        alert("Enter a valid name");
        return;
    }

    if (!validateEmail(subscribeEmail)) {
        alert("Enter a valid email");
        return;
    }

    showpopup();
}
);

function validateName(name) {
    const regexName = /^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/;
    return regexName.test(name);
}

function validateEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}
const pop = document.getElementById("pop-up");
function showpopup() {
    pop.hidden = false;
    void pop.offsetWidth;

    pop.classList.add("show");
    setTimeout(() => {
        pop.classList.remove("show");
        setTimeout(() => {
            pop.hidden = true;
        }, 500);
    }, 2000);
}