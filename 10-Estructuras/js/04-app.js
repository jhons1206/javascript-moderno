// Mayor o igual y else if

const dinero = 100;
const totalAPagar = 300;
const tarjeta = false;
const cheque = false;

if( dinero >= totalAPagar ) {
    console.log("Si podemos pagar");
} else if(cheque) {
    console.log("Si tengo un cheque");
} else if(tarjeta) {
    console.log("Si puedo pagar porque tengo tarjeta");
} else {
    console.log("Fondos Insuficientes");
}