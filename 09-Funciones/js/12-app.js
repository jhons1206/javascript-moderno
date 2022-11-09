// Array con objetos
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Licuadora', precio: 80 },
    { nombre: 'Hervidor', precio: 50 },
    { nombre: 'Refrigerador', precio: 1500 },
    { nombre: 'Smart TV', precio: 2400 },
]

// .map te crea un arreglo nuevo
const nuevoArreglo = carrito.map( producto => `${producto.nombre} -  Precio: ${producto.precio}` );

carrito.forEach( producto => console.log( `${producto.nombre} -  Precio: ${producto.precio}` ) );


console.log(nuevoArreglo);