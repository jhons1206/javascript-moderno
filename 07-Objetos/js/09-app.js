"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 350,
    disponible: true,
}

// Método para sellar el objeto
// No se pueden agregar ni eliminar propiedades pero si se pueden modificar las existentes
Object.seal(producto);

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));