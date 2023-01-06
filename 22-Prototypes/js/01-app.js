const cliente = {
    nombre: 'Jhon',
    saldo: 500
}

console.log(cliente);
// console.log(typeof cliente);

// Constructor de objeto
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);

console.log(juan);