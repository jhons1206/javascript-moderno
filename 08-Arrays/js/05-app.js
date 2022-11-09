// const meses = ['Enero', 'Febrero', 'Marzo'];

// // Agregar al final del arreglo
// meses.push('Abril');
// meses.push('Mayo');



// console.table(meses);


const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 500
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

// .push agrega al final de un arreglo
carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: "Teclado",
    precio: 250
}

carrito.unshift(producto3);


console.table(carrito);