const producto = 'Monitor 20 pulgadas';

// .repeat te permite repetir una cadena de texto...
const texto = 'en Promoción '.repeat(2.4);

console.log(texto);
console.log(`${producto} ${texto} !!!`);


// Split permite dividir un string
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(' '));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(', '));

const tweet = 'Aprendiendo Javascript #JSModernoConJuan';
console.log(tweet.split('#'));