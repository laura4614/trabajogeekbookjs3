'use strict'

const input1=document.querySelector('#inputuno');
const input2=document.querySelector('#inputdos');
const button=document.querySelector('.clicked');
let acumHTML='';

button.addEventListener("click",(e)=>{

  event.preventDefault()
  const arrayInput=[];
  arrayInput[0]=(inputuno.value);
  arrayInput[1]=(inputdos.value);
  for (const i of arrayInput) {
    acumHTML=acumHTML+`<br>¡A mí también me encantó ${i}!`;
    console.log (`¡A mí también me encantó ${i}!`);       
  }
  document.querySelector(`.fav`).innerHTML=acumHTML; 
});