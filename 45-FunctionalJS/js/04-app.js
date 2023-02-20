const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// const obtenerNombres = (producto) => {
//     return producto.nombre;
// };

// con .map
// const resultado = carrito.map(obtenerNombres);
// console.log(resultado);

// con .find
// const obtenerNombre = (producto) => {
//     if (producto.nombre === 'Celular') {
//         return producto.nombre;
//     }
// };

// const resultado2 = carrito.find(obtenerNombre);
// console.log(resultado2);

// con .filter
const obtenerPrecios = (producto) => {
    return producto.precio < 500;
};

const resultado3 = carrito.filter(obtenerPrecios);
console.log(resultado3);
