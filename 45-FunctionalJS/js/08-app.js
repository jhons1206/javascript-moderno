// Closures
// - Hace disponible un valor por fuera de una función
// - Hacen uso del scope en JavaScript
// - Es una forma de acceder a una función o valor desde el exterior
// - Los Closures se crean cada vez que se crea una función

const obtenerCliente = () => {
    const nombre = 'Roberth';

    // Closure
    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
};

const cliente = obtenerCliente();

cliente();





// Ejemplo de Scope

// const cliente = 'Juan Pérez';

// function mostrarCliente() {
//     const cliente = 'Jhon Sandoval';

//     console.log(cliente);
// }

// console.log(cliente);

// mostrarCliente();
