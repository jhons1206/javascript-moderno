// Self
// Self se utiliza con los service workers.
// Self hace referencia a la ventana global.

self.onload = () => {
    console.log('Ventana lista');
}

window.nombre = 'Teclado Gamer RGB K-33';

const producto = {
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El producto: ${self.nombre}`;
    }
}

console.log(producto.mostrarInfo());