// Explicit Binding
// call tienes que pasarle los elementos de forma individual
// apply toma un arreglo completo
// bind te crea una nueva función y al igual que call tienes que pasarle cada valor de forma individual.

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'Jhon'
}

const musicaFavorita = ['Rock Alternativo', 'Salsa'];

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

persona.apply(informacion, musicaFavorita);

const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();