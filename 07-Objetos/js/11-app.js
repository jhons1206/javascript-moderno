
const nombre = "Hola";
const precio = 20;

// La palabra this se refiere a los valores que existen en el mismo objeto.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 350,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

const producto2 = {
    nombre: "Smart TV",
    precio: 2500,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();