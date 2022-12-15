const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Licuadora', precio: 80 },
    { nombre: 'Hervidor', precio: 50 },
    { nombre: 'Refrigerador', precio: 1500 },
    { nombre: 'Smart TV', precio: 2400 },
]


for(let pendiente of pendientes) {
    console.log(pendiente);
}


for(let producto of carrito) {
    console.log(producto.nombre);
}