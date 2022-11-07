const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 350,
    disponible: true
}

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

// Eliminar propiedades de un objeto
delete producto.disponible;


console.log(producto);