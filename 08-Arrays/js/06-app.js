// Forma imperativa

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

const producto3 = {
    nombre: "Teclado",
    precio: 250
}



// Forma declarativa

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];



console.table(resultado);