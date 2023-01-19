
let numUno;
let numDos;
let operacion;

function init(){

const igual = document.getElementById('igual');
const punto = document.getElementById('punto');
const cero = document.getElementById('cero');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const multiplicar = document.getElementById('multiplicar');
const dividir = document.getElementById('dividir');
const suma = document.getElementById('mas');
const menos = document.getElementById('menos');
const resultado = document.getElementById('resultado');
const clear = document.getElementById('clear');

cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}
uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}

clear.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    numUno = resultado.textContent;
    operacion = "+";
    limpiar();
}

igual.onclick = function(e){
    numDos = resultado.textContent;
    resolver();
}
}

function limpiar(){
    resultado.textContent ="";
}

function resetear(){
    resultado.innerHTML = "";
    numUno = 0;
    numDos = 0;
    operacion = "";

}
function resolver(){

    let respuesta = 0;

    switch (operacion) {
        case "+":
            
        respuesta = parseFloat(numUno) + parseFloat(numDos);
            break;
    
        default:
            break;
    }
    resetear();
    resultado.textContent = respuesta;
    
}
