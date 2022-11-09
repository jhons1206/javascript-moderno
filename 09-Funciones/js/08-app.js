function sumar(a, b) {
    return a + b;
}

const resultado = sumar(10, 20);

console.log(resultado);



// Ejemplo más avanzado

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto() {
    return total * 1.18;
}


total = agregarCarrito(300);
total = agregarCarrito(600);
total = agregarCarrito(200);
total = agregarCarrito(100);

const totalPagar = calcularImpuesto(total);

console.log(total);

console.log(`El total a pagar es de ${totalPagar}`);
