// Composition
// - Es escribir muchas funciones e ir utilizando en tus objetos lo que creas que vas a utilizar
const obtenerNombre = (info) => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    },
});

const guardarEmail = (info) => ({
    agregarEmail(email) {
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    },
});

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa,
    };

    return Object.assign(info, obtenerNombre(info));
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto,
    };

    return Object.assign(info, obtenerNombre(info));
}

const cliente = Cliente('Jhon', 'jhon@gmail.com', 'Maditek Soft');
cliente.mostrarNombre();

const empleado = Empleado('Pedro', 'empleado@correo.com', 'Programador');
empleado.mostrarNombre();
