// Funcion IIFE
// (function() {
//     console.log('Desde un IIFE');

//     window.nombreCliente = 'Jhon';
// })();

// Exportar Variables
export const nombreCliente = 'Jhon';
export const ahorro = 200;


// Exportar funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if( ahorro > 0) {
        console.log('Si tiene saldo');
    } else {
        console.log('El cliente no tiene saldo');
    }
}


// Exportar clases
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}


// Export Default
export default function nuevaFuncion() {
    console.log('Este es el export default');
}
