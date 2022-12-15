// forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
});


const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Licuadora', precio: 80 },
    { nombre: 'Hervidor', precio: 50 },
    { nombre: 'Refrigerador', precio: 1500 },
    { nombre: 'Smart TV', precio: 2400 },
]

const nuevoArreglo = carrito.forEach( producto => producto.nombre);


const nuevoArreglo2 = carrito.map( producto => producto.nombre);


console.log(nuevoArreglo);
console.log(nuevoArreglo2);