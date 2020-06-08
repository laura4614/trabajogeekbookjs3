'use strict'
const tipoTexto = document.querySelector('.texto');
const boton = document.querySelector('.clicked');

boton.addEventListener('click',(e) => {
    console.dir(tipoTexto);
    console.dir(tipoTexto.value);
});