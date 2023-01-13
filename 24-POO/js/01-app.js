// Class Declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const jhon = new Cliente('Jhon', 500);
console.log(jhon.mostrarInformacion());
console.log(jhon);

console.log(Cliente.bienvenida());


// Class Expresion
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const jhon2 = new Cliente2('Jeremy', 200);
console.log(jhon2.mostrarInformacion());
console.log(jhon2);