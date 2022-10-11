"use strict"

// Definimos los dos operadores
const ope1 = document.getElementById("ope1");
const ope2 = document.getElementById("ope2");

const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multi");
const dividir = document.getElementById("divi");
const entero = document.getElementById("entero");
const decimal = document.getElementById("decimal");

// Es obligatorio definir?
//const resultado = document.getElementById("resultado");


sumar.onclick = function(){
    resultado.innerHTML = parseFloat(ope1.value) + parseFloat(ope2.value);
}
restar.onclick = function(){
    resultado.innerHTML = parseFloat(ope1.value) - parseFloat(ope2.value);
}
multiplicar.onclick = function(){
    resultado.innerHTML = parseFloat(ope1.value) * parseFloat(ope2.value);
}
dividir.onclick = function(){
    resultado.innerHTML = parseFloat(ope1.value) / parseFloat(ope2.value);
}
entero.onclick = function(){
    resultado.innerHTML = parseInt(resultado.innerHTML);
}
decimal.onclick = function(){
    resultado.innerHTML = parseFloat("0."+resultado.innerHTML.toString().split(".")[1]);
}
