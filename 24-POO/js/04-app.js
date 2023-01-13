// Class Declaration
class Cliente {

    #nombre;

    // setNombre(nombre) {
    //     this.#nombre = nombre;
    // }

    // getNombre() {
    //     return this.#nombre;
    // }

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

// const jhon = new Cliente();
// jhon.setNombre('Jhon');
// console.log(jhon.getNombre() );

const jhon = new Cliente('Jhon', 300);
console.log(jhon.mostrarInformacion());