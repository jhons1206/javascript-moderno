const autenticado = false;
const puedePagar = false;


// Operador ternario
// console.log( autenticado || puedePagar ? "Si puede pagar" : "No no puede pagar");

// Operador ternario que evalúa dos condiciones por separado...
console.log( autenticado ? puedePagar ? "Si esta autenticado y puede pagar" : "Si esta autenticado, pero no puede pagar" : "No no esta autenticado");


