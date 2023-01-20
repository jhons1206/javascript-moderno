// WeakSet
// Solo puede almacenar objetos
// No son iterables

const weakset = new WeakSet();

const cliente = {
    nombre: 'Jhon',
    saldo: 100
}

weakset.add(cliente);

// console.log(weakset.has(cliente2));

// weakset.delete(cliente);

console.log(cliente.size);


console.log(weakset);