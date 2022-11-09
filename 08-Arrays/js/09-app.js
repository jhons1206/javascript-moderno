// Array con objetos
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Licuadora', precio: 80 },
    { nombre: 'Hervidor', precio: 50 },
    { nombre: 'Refrigerador', precio: 1500 },
    { nombre: 'Smart TV', precio: 2400 },
]




for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} -  Precio: ${carrito[i].precio}`);
}

console.log("\n");

carrito.forEach( function(producto) {
    console.log(`${producto.nombre} -  Precio: ${producto.precio}`);
})