const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`El puerto ${port} esta escuchando`);
});

app.post('/POST/palindrome', (req, res) => {
    let palabra = req.body.phrase;
    if (palabra) {
        palindrome(palabra)
    } else {
        console.log('Fomato invalido')
    }

});

function palindrome(phrase) {
    let palabra = phrase;
    let palindromo;
    let minusculas = palabra.toLowerCase();
    let espacios = minusculas.split("")
    let palabra_verificada = "";

    for (i in espacios) {
        if (espacios[i] != " ") {
            palabra_verificada += espacios[i];
        }
    }

    let letras = palabra_verificada.split("");
    let reverso = palabra_verificada.split("").reverse();

    for (i in letras) {
        if (letras[i] == reverso[i]) {
            palindromo = { palindrome: true }
        } else {
            palindromo = { palindrome: false };
        }
    }

    return console.log(palindromo)
}