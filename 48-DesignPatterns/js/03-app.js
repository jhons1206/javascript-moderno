// Singleton
// No permite crear instancias múltiples de una misma clase.
// Siempre retorna el mismo objeto instanciado inicialmente.

let instancia = null; // Aplicando Singleton Pattern

class Persona {
    constructor(nombre, email) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const persona = new Persona('Karen', 'karen@hotmail.com');
console.log(persona);

const persona2 = new Persona('Diego', 'diego@gmail.com');
console.log(persona2);

