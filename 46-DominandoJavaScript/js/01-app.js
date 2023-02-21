// Scope
// - Es el alcance del valor de una variable
// - Existen dos tipos de scope: el scope global y el scope dentro de una función o bloque de código

// const cliente = 'Jhon'; // Scope global

// function mostrarCliente() {
//     const cliente = 'Pedro'; // Scope dentro de una función
//     console.log(cliente);
// }

// mostrarCliente();

const login = true;
const cliente = 'Juan';

function clienteLogueado() {
    
    // console.log(cliente);

    // if(login) {
    //     console.log(cliente);
    //     const cliente = 'Admin';
    //     console.log(cliente);
    // }
}

function funcion2() {
    console.log(cliente);
}

funcion2();
clienteLogueado();