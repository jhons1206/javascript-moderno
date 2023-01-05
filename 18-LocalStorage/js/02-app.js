const nombre = localStorage.getItem('nombre');
console.log(nombre);


// Traer un Objeto
// JSON.parse: Convierte un string en un objeto
const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse( productoJSON ));


// Traer un arreglo
const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log(mesesArray);