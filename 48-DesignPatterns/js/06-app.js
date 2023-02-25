// Mixin Pattern

// Clase Persona
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

// Objeto funcionesPersona
const funcionesPersona = {
    // Funciones del objeto
    mostrarInformacion() {
        console.log(`Nombre persona: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Mi nombre es: ${this.nombre}`);
    }
}

// Añadir funcionesPersona a la clase Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona('Jhon', 'correo@correo.com');

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Persona('Romy', 'cliente@cliente.com');
console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();