// Constructor de objeto (Object Constructor)
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente() }`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

// Instanciamos el objeto
const jhon = new Cliente('Jhon', 6500);
console.log( jhon.tipoCliente() );
console.log( jhon.nombreClienteSaldo() );
jhon.retiraSaldo(1000);
console.log( jhon.nombreClienteSaldo() );

console.log(jhon);