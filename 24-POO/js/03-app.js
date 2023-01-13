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

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo); // Se usa super para heredar atributos del constructor de la clase padre Cliente
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() { // reescribir un método
        return `Bienvenido al cajero de empresa`;
    }
}

const jhon = new Cliente('Jhon', 500);
const empresa = new Empresa('Codigo con Juan', 800, 964645417, 'Cursos en Línea');
console.log(empresa);
console.log(empresa.mostrarInformacion());


console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());