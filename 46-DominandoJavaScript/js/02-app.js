// Hoisting
// - JavaScript ejecuta el código en 2 fases:
// - En la primera registra las funciones y en la segunda las manda llamar.

obtenerCliente('Jhon');

// Declaración de función (Function Declaration)
function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

// Expresión de función (Function Expression)

const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

obtenerCliente2('Roberth');
