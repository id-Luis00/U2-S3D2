

/* prendiamo i dati dall'unput */

const inputName = document.getElementById('inputName');

const form = document.querySelector('form');
const div = document.getElementById('card-user');

const span = document.getElementById('contatore');



form.onsubmit = (event) => {

    event.preventDefault();

    localStorage.setItem("username", inputName.value);
    
    showUser(inputName);
    form.reset();

}

const showUser = () => {

    const p = document.createElement('p');
    p.innerText = localStorage.getItem("username");
    div.innerText = "";
    div.appendChild(p);

}


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

window.addEventListener("DOMContentLoaded", function () {
    const actualUser = localStorage.getItem("username")

    if(actualUser) {
        showUser();
    }
});

