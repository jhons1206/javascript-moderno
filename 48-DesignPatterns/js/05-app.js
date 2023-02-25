// Module Pattern

// Modulos en ES6+
// const mostrarCliente = (nombre) => {
//     console.log(nombre);
// };

// export default mostrarCliente;


// Módulos en ES5 y versiones anteriores
const modulo1 = (function () {
    const nombre = 'Juan';

    function hola() {
        console.log('hola')
    }

    return {
        nombre,
        hola
    }
})();