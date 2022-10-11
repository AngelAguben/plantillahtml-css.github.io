"use strict"

// Definimos los dos numeros
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const aBina = document.getElementById("aBina");
const aOcta = document.getElementById("aOcta");
const aHexa = document.getElementById("aHexa");

const copiar = document.getElementById("copi");
const borrar = document.getElementById("borrar");


const deBina = document.getElementById("deBina");
const deOcta = document.getElementById("deOcta");
const deHexa = document.getElementById("deHexa");


// Para mostrar los resultados
// Este para el resultado del número 1
const base = document.getElementById("base");
// Este para el resultado del número 2
const decimal = document.getElementById("decimal");

// Funciones para convertir de decimal a base:
// Binaria
aBina.onclick = function () {
    // Pasamos el número a base 2
    base.innerHTML = parseInt(num1.value).toString(2);
};
// Octal
aOcta.onclick = function () {
    // Pasamos el número a base 8
    base.innerHTML = parseInt(num1.value).toString(8);
};
// Hexadecimal
aHexa.onclick = function () {
    // Pasamos el número a base 16
    base.innerHTML = parseInt(num1.value).toString(16);
};

// Botón para copiar el resultado en el número 2
copiar.onclick = function () {
    num2.value = base.innerHTML;
};

// Al pular el botón borará los números y los resultados
borrar.onclick = function () {
    num1.value = "";
    num2.value = "";
    base.innerHTML = "";
    decimal.innerHTML = "";
};
// Binario
deBina.onclick = function () {
    // Pasamos el número de base 2 a decimal
    decimal.innerHTML = parseInt(num2.value, 2);
};
// Octal
deOcta.onclick = function () {
    // Pasamos el número de base 8 a decimal
    decimal.innerHTML = parseInt(num2.value, 8);
};
// Hexadecimal
deHexa.onclick = function () {
    // Pasamos el número de base 16 a decimal
    decimal.innerHTML = parseInt(num2.value, 16);
};