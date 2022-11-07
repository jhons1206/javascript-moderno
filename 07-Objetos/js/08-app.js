"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 350,
    disponible: true,
}

// Método para congelar el objeto (no modificable)
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto));