

/* prendiamo i dati dall'unput */

const inputName = document.getElementById('inputName');

const form = document.querySelector('form');
const div = document.getElementById('card-user');

const span = document.getElementById('contatore');



form.onsubmit = (event) => {
    event.preventDefault();
    showUser();
    localStorage.setItem("username", inputName.value);

}

const showUser = () => {

    const p = document.createElement('p');
    p.innerText = inputName.value;
    div.innerText = "";
    div.appendChild(p);

}


window.addEventListener("DOMContentLoaded", () => {

    const newUser = localStorage.getItem("username")
    console.log(newUser)

}

)

setInterval(() => {

    span.innerText = contatore;
    
}, 1000);








let contatore = sessionStorage.getItem("count");

setInterval(function () {
    contatore++
    sessionStorage.setItem("count", contatore)

}, 1000)


setInterval(() => {
const seconds = sessionStorage.getItem("count")
console.log(seconds)
    
}, 1000);