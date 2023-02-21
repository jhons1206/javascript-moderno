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

const obtenerEmail = (info) => ({
    mostrarEmail() {
        console.log(`Email: ${info.email}`);
    },
});

const obtenerEmpresa = info => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
})

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa,
    };

    return Object.assign(
        info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    );
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto,
    };

    return Object.assign(
        info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    );
}

const cliente = Cliente('Jhon', 'jhon@gmail.com', 'Maditek Soft');
console.log('Datos Cliente:')
console.log('==============')
cliente.mostrarNombre();
cliente.agregarEmail('cliente@cliente.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();
console.log('\n');

console.log('Datos Empleado:')
console.log('==============')
const empleado = Empleado('Pedro', 'empleado@correo.com', 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();
