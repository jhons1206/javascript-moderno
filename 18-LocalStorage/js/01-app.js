localStorage.setItem('nombre', 'Jhon');

// sessionStorage.setItem('nombre', 'Juan');

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 500
}

// Objeto
// JSON.stringify : Convierte un objeto a un string

const productoString = JSON.stringify( producto );
// console.log(productoString);
localStorage.setItem('producto', productoString);


// Arreglo
const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify ( meses );
localStorage.setItem('meses', mesesString);
// localStorage.setItem('meses2', JSON.stringify ( meses ));