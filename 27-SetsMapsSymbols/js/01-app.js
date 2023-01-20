// Set
// Puede almacenar cualquier tipo de valor

const carrito = new Set();

// Médodo agregar elementos al Set
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

// Método para eliminar un elemento del Set
console.log( carrito.delete('Disco #4') );

// Método revisar si existe algún elemento en el Set
// console.log( carrito.has('Guitarra') ); // Devuelve true o false

console.log(carrito.size);

carrito.forEach( (producto, index, pertenece) => {
    // console.log(producto);
    // console.log(index);
    console.log(pertenece);
})

// carrito.clear();

console.log(carrito);


// Del siguiente arreglo, eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);