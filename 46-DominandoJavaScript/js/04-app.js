// Implicit Binding
// Utiliza la palabra reservada this. para decirle en que parte va a encontrar los valores del objeto.

const usuario = {
    nombre: 'Jhon',
    edad: 25,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
    mascota: {
        nombre: 'Rocky',
        edad: 2,
        informacion() {
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();