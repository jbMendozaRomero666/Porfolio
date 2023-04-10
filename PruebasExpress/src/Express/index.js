const express = require('express');
const cors = require('cors');
const app = express();

// Configuramos el middleware de CORS
app.use(cors());
// Creamos un array de objetos para representar los productos
const productos = [{
    id: 1,
    nombre: 'Hamburguesa',
    precio: 100,
    ruta: 'src/img/hamburguesa.webp',
    descripcion: 'Jugosa hamburguesa de carne de res 100% con lechuga, tomate, queso cheddar y salsa especial'
  },
  {
    id: 2,
    nombre: 'Pizza',
    precio: 120,
    ruta: 'src/img/Pizza.jpg',
    descripcion: 'Pizza casera con salsa de tomate, queso mozzarella y los ingredientes que tú elijas'
  },
  {
    id: 3,
    nombre: 'Hot dog',
    precio: 80,
    ruta: 'src/img/hotdogs.webp',
    descripcion: 'Sabroso hot dog con salchicha de pavo, cebolla caramelizada, mostaza y ketchup'
  },
  {
    id: 4,
    nombre: 'Ensalada Caesar',
    precio: 90,
    ruta: 'src/img/EnsaladaCesar.jpg',
    descripcion: 'Ensalada Caesar con lechuga romana, pollo a la parrilla, queso parmesano, crutones y aderezo Caesar'
  },
  {
    id: 5,
    nombre: 'Sándwich de pollo',
    precio: 110,
    ruta: 'src/img/sandwichpollo.jpg',
    descripcion: 'Delicioso sándwich de pollo con lechuga, tomate, queso suizo y mayonesa'
  },
  {
    id: 6,
    nombre: 'Taco de carnitas',
    precio: 70,
    ruta: 'src/img/tacos.jpg',
    descripcion: 'Taco de carnitas de cerdo con cilantro, cebolla y salsa verde'
  },
  {
    id: 7,
    nombre: 'Burrito de frijoles',
    precio: 85,
    ruta: 'src/img/Burritofrijoles.jpg',
    descripcion: 'Burrito de frijoles negros con arroz, queso, salsa y guacamole'
  },
  {
    id: 8,
    nombre: 'Papas fritas',
    precio: 50,
    ruta: 'src/img/Papasfritas.webp',
    descripcion: 'Crujientes papas fritas con sal y ketchup'
  },
  {
    id: 9,
    nombre: 'Pollo a la parrilla',
    precio: 130,
    ruta: 'src/img/Polloparrilla.webp',
    descripcion: 'Pollo a la parrilla con ensalada de lechuga y tomate'
  },
  {
    id: 10,
    nombre: 'Sopa de tomate',
    precio: 60,
    ruta: 'src/img/Sopatomate.jpg',
    descripcion: 'Sopa de tomate casera con hierbas frescas y crutones'
  },
  {
    id: 11,
    nombre: 'Albóndigas con pasta',
    precio: 95,
    ruta: 'src/img/Albóndigapasta.jpg',
    descripcion: 'Albóndigas de carne con salsa de tomate y pasta al dente'
  },
  {
    id: 12,
    nombre: 'Filete de salmón',
    precio: 150,
    ruta: 'src/img/Filetesalmón.jpg',
    descripcion: 'Filete de salmón asado con arroz y ensalada de espinacas'
  },
  {
    id: 13,
    nombre: 'Arroz con pollo',
    precio: 75,
    ruta: 'src/img/ArrozPollo.jpg',
    descripcion: 'Arroz con pollo Arroz sabroso y tierno con trozos de pollo tierno y especias.'
  },
  {
    id: 14,
    nombre: 'Pasta Alfredo',
    precio: 100,
    ruta: 'src/img/PastaAlfredo.jpg',
    descripcion: 'Pasta en su punto con una cremosa salsa Alfredo, decorada con queso parmesano y perejil.'
  },
  {
    id: 15,
    nombre: 'Costillas BBQ',
    precio: 140,
    ruta: 'src/img/CostillasBBQ.webp',
    descripcion: 'Jugosas costillas de cerdo marinadas con una salsa BBQ casera, perfectamente asadas para una carne tierna y sabrosa.'
  },
  {
    id: 16,
    nombre: 'Pollo tikka masala',
    precio: 120,
    ruta: 'src/img/Pollotikkamasala.jpg',
    descripcion: 'Pollo en trozos marinado en especias y yogur, servido en una cremosa salsa de tomate y especias indias.'
  },
  {
    id: 17,
    nombre: 'Ensalada de frutas',
    precio: 55,
    ruta: 'src/img/EnsaladaFrutas.jpg',
    descripcion: 'Mezcla de frutas frescas, cortadas y servidas en una cama de lechuga y decoradas con un toque de miel.'
  },
  {
    id: 18,
    nombre: 'Wrap de vegetales',
    precio: 80,
    ruta: 'src/img/Wrapvegetales.jpg',
    descripcion: 'Wrap relleno de una variedad de vegetales frescos, aliñado con una vinagreta de mostaza y miel.'
  },
  {
    id: 19,
    nombre: 'Chow mein de res',
    precio: 90,
    ruta: 'src/img/ChowMeinres.jpg',
    descripcion: 'Fideos chinos salteados con tiras de carne de res, cebolla, pimiento y salsa de soja.'
  },
  {
    id: 20,
    nombre: 'Bagel con queso crema',
    precio: 65,
    ruta: 'src/img/BagelQuesocrema.webp',
    descripcion: 'Bagel recién horneado, untado con una capa generosa de queso crema y decorado con una pizca de eneldo.'
  }
]

// Endpoint para obtener la lista de productos
app.get('/productos', (req, res) => {
  res.json(productos);

});

// Endpoint para obtener un producto por su id
app.get('/productos/:id/imagen', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (producto) {
    const rutaImagen = productos.ruta;
    const imagen = fs.readFileSync(rutaImagen);
    res.attachment('imagen.webp');
    res.send(imagen);
  } else {
    res.status(404).json({
      mensaje: 'Producto no encontrado'
    });
  }
});


// Iniciamos el servidor en el puerto 3000
app.listen(5500, () => {
  console.log('Servidor escuchando en el puerto 5500');
});

process.on('unhandledRejection', err => {
  console.error(err);
  process.exit(1);
});