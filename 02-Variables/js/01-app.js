// Declarar variables con 'var'

// Inicializar una variable con un valor
var producto = "Monitor de 24 pulgadas";
console.log(producto);

// Las variables se pueden reasignar
producto = 'Monitor de 32 pulgadas';
console.log(producto);

// Javascript es un lenguaje de tipo dinámico, no se especifica tipo de dato
producto = 20;
console.log(producto);

// Se pueden inicializar sin valor y asignarlo después
var disponible;
disponible = true;
disponible = false;

console.log(disponible);

// Inicializar múltiples variables
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificación = 5;

// Las variables no pueden iniciar con números
// var 99dias;
// var dias99;

// var 01_;
// var _01;
// var _usuario;
// var __usuario;

// Formas de nombrar o declarar variables
// Camelcase
var nombreProductoCategoriaPrecio;

// Underscore o Snake
var nombre_producto_categoria_precio;


// Declaración no válida
// var nombre producto;