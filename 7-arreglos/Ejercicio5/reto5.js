'use strict'

//A
const numeros = [1, 2, 3, 4, 5];
let acumulador = 0;

for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
}

let media = (acumulador) / 5;
console.log('La media del listado de numeros es :  ' + media);

// B
const numbers = [6, 7, 8, 9, 1];
let acumulator = 0;

for (let i = 0; i < numbers.length; i++) {
    acumulator += numbers[i];
}

let med = (acumulator) / 6;
console.log('La media del listado de numeros es :  ' + med);

// C
const num = [6, 7, 8, 9, 1];

function calculate(num) {
    var sum = 0;
    var count = numeros.length;
    for (var i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum / count;
}
document.write(calculate(num));