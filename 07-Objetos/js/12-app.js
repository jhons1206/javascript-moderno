// Object Literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 350,
    disponible: true
}

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Monitor 32 pulgadas", 800);
console.log(producto2);

const producto3 = new Producto("Mouse Gamer Halion", 70);
console.log(producto3);
