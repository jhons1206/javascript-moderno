// Funciones Puras o Pure Functions
// - Si toma una entrada de datos debe retornar un solo valor (salida)
// - No modifican un valor, es decir una variable global no la modifican

const numero1 = 20;
const duplicar = (numero) => numero * 2;

const resultado = duplicar(numero1);

console.log(resultado);
console.log(numero1);
