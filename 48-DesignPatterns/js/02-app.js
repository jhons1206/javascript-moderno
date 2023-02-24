// Constructor Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Empleado extends Persona {
    constructor(nombre, email, puesto) {
        super(nombre, email);
        this.puesto = puesto;
    }
}

const persona = new Persona('Nicol', 'nicol@gmail.com');

console.log(persona);

const empleado = new Empleado('Jeremy', 'empleado@empleado.com', 'Programador');

console.log(empleado);