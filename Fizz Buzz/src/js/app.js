document.addEventListener('DOMContentLoaded', function () {
    app();




});

function app() {
    Fizz_Buzz();
    fizz_Auto();
}

function Fizz_Buzz() {

    const numero = document.getElementById('numero');
    let num = parseInt(numero.value);
    fb(num);
    numero.addEventListener('input', Validar);

}

function Validar(e) {

    if (e.target.value === '') {
        alerta(`El campo no puede estar vacio`, 'error');
    }

}

function fb(num) {

    if (num % 3 === 0 && num % 5 === 0) {
        alerta(`${num} FizzBuzz`, 'exito');
    } else if (num % 5 === 0) {
        alerta(`${num} Buzz`, 'exito');
    } else if (num % 3 === 0) {
        alerta(`${num} Fizz`, 'exito');
    } else {
        alerta(`Ingrese un numero divisible entre 3 y 5`, 'error');
    }
}

function alerta(mensaje, tipo) {

    const Fizz_Buzz = document.querySelector('.Fizz_Buzz');

    const div = document.createElement('DIV');
    const p = document.createElement('P');
    p.textContent = mensaje;
    div.classList.add(tipo);
    div.appendChild(p);
    Fizz_Buzz.appendChild(div);

    setTimeout(() => {
        const alerta = document.querySelector(`.${tipo}`);
        alerta.remove();
    }, 3000);

}


function fizz_Auto() {
    const numeros = document.getElementById('num');
    let nume = parseInt(numeros.value);
    numeros.addEventListener('input', Validar);
    fizzAuto(nume);
}

function fizzAuto(nume) {

    const table = document.querySelector('.table');

    let numeros = "";

    for (let i = 0; i <= nume; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            numeros += `<li><p class="number">${i}</p>FizzBuzz</li> 
                        `;
            table.innerHTML = `
                   <ul>${numeros}</ul>
            `;
        } else if (i % 5 === 0) {
            numeros += `<li><p class="number">${i}</p>Fizz</li> 
                        `;
            table.innerHTML = `
                <ul>${numeros}</ul>
            `;
        } else if (i % 3 === 0) {
            numeros += `<li><p class="number">${i}</p>Buzz</li> 
                        `;
            table.innerHTML = `
                <ul>${numeros} </ul>
            `;
        } else {
            numeros += `<li><p class="number">${i}</p>Demas Numeros</li> 
                        `;
            table.innerHTML = `
                <ul>${numeros}</ul>
            `;
        }
    }


}

function black(){

    const noche = document.getElementById('black');

    noche.addEventListener('click', ()=>{
        document.body.classList.toggle('noche');
    });
}