// WeakMaps
// Sirven para mantener una serie de datos privados
// No se pueden iterar
// No puedes conocer su extensión .size
// Solo aceptan objetos

const producto = {
    idProducto: 10
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');

console.log(weakmap.has(producto));
console.log(weakmap.get(producto));
console.log(weakmap.delete(producto));
console.log(weakmap.size);


console.log(weakmap);