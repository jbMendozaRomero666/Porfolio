const urlApp = 'http://localhost:5500/productos';


appapi();
let productos = [];
async function appapi() {

    try {
        const url = await fetch(urlApp);
        const response = await url.json();
        productos = [...response];
        showResponse();
        llenarcarrito();

    } catch (error) {
        console.log(error);
    }



}

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const clearCarrito = document.getElementById('clearCarrito');
const comprar = document.getElementById('comprar');


function savecarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const divcontainer = document.querySelector('.container');

function showResponse() {
    limpiarHtml(divcontainer);
    productos.forEach(data => {

        const {
            id,
            ruta,
            nombre,
            precio,
            descripcion
        } = data;
        const div = document.createElement('DIV');

        div.innerHTML = `
        <div class="card">
        <div class="cardBody">
            <div class="card-header-img">
                <img src="${ruta}" alt="">
            </div>
            <div class="card-body-text">
                <h1>${nombre}</h1>
                <p><span>$ ${precio}</span></p>
                <p>${descripcion}</p>
                <button class="BtnComprar" type="submit" data-id="${id}">Comprar</button>
            </div>
        </div>
    </div>
        `;
        divcontainer.appendChild(div);
    });

}



divcontainer.addEventListener('click', buySaveLocalStorage);

function buySaveLocalStorage(e) {
    //?Evalua contains que una clase exista
    if (e.target.classList.contains('BtnComprar')) {
        filtrardemo(e.target.dataset.id);
    }

}


function filtrardemo(id) {
    const idp = parseInt(id);
    const respuesta = productos.find(buy => buy.id === idp);
    const cantidad = 1;
    //findIndex me trae la pocicion del objeti si la encuentra 
    let index = carrito.findIndex(data => data.id === idp);

    if (index !== -1) {
        // El elemento ya existe en el carrito
        carrito[index].cantidad += cantidad;
        savecarrito();
        llenarcarrito();
        console.log(`Se ha aumentado la cantidad del elemento con id ${idp} en el carrito a ${carrito[index].cantidad}`);
    } else {
        // El elemento no existe en el carrito hasOwnProperty agrega la cantidad en 1 
        if (!respuesta.hasOwnProperty("cantidad")) {
            respuesta.cantidad = cantidad;
        }
        carrito.push(respuesta);
        console.log(`Se ha agregado el elemento con id ${idp} al carrito`);
        savecarrito();
        llenarcarrito();
    }
}



function llenarcarrito() {
    limpiarHtml(contenedorCarrito);
    if (carrito.length === 0) {
        clearCarrito.disabled = true;
        comprar.disabled = true;

    } else {


        carrito.forEach(carrito => {
            const {
                id,
                nombre,
                precio,
                ruta,
                cantidad
            } = carrito;

            const row = document.createElement('TR');

            row.innerHTML = `
                       <td><img src="${ruta}" width="100"></td>
                       <td>${nombre}</td>
                       <td>${precio}</td>
                       <td>${cantidad}</td>

                      <a href="#" class="Borrar-Producto" data-id="${id}"> X </a>
                      </td>
                            `;

            contenedorCarrito.appendChild(row);

        });
        clearCarrito.disabled = false;
        comprar.disabled = false;

    }



}


contenedorCarrito.addEventListener('click', (e) => {

    if (e.target.classList.contains('Borrar-Producto')) {
        let id = parseInt(e.target.dataset.id);
        carrito = carrito.filter(borra => borra.id !== id);
        savecarrito();
        llenarcarrito();
    }

});

clearCarrito.addEventListener('click', clearCarritoProduct);

function clearCarritoProduct() {

    carrito = [];
    savecarrito();
    llenarcarrito();
    limpiarHtml(contenedorCarrito);
    console.log('me estoy ejecutando antes de tiempo ')
}

function limpiarHtml(lugar) {
    while (lugar.firstChild) {
        lugar.removeChild(lugar.firstChild);
    }
}