//?Funciones para realizar compras

let carrito = JSON.parse(localStorage.getItem('carrito'));
const appCompras = document.querySelector('#lista-Compras tbody');
const resumen = document.querySelector('#resumen');

comprasModelo();

function comprasModelo() {
    carrito.forEach(carrito => {
        const {
            ruta,
            nombre,
            precio,
            cantidad
        } = carrito;
        total = cantidad * precio;
        const row = document.createElement('TR');
        row.innerHTML = `
           <td><img src="../${ruta}"></td>
           <td>${nombre}</td>
           <td>$${precio}</td>
           <td>${cantidad}</td>
           <td>$${total}</td>
           
        `;

        appCompras.appendChild(row);
    })


}
calcularTotal();
function calcularTotal(){
 
   const rows = document.createElement('TR');

  carrito;
  let totalPagar = 0;
  let cantidad = 0;
  for(let i = 0 ; i < carrito.length; i++){
    let elemento = Number(carrito[i].precio * carrito[i].cantidad);
    let numeroProductos = Number(carrito[i].cantidad);

    totalPagar = totalPagar + elemento;
    cantidad  = cantidad + numeroProductos;
  }

  rows.innerHTML = `
                     <td>${cantidad}</td>              
                     <td>$${totalPagar}</td>
                            `;
 
  resumen.appendChild(rows);
  
    
}