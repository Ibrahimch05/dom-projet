const form = document.getElementById('form');
const usernameInput = document.getElementById('name');
const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('password');
const errorDiv = document.getElementById('error');

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button').addEventListener('click', function (event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire

        // Récupération des valeurs des champs
        const username = document.getElementById('name').value.trim();
        const email = document.getElementById('Email').value.trim();
        const password = document.getElementById('password').value.trim();
        console.log('fhsfghghs', username)
        console.log('fhsfghghs', email)
        console.log('fhsfghghs', password)

        // Validation des champs
        if (username == 'ibrahim' && email == 'ibrahim@gmail.com' && password == '123') {
            alert('hello ibrahim')
            console.log('fhsfghghs')
        } else {
            console.log('error');
        }

    })

})