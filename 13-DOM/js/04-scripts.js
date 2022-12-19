// querySelector te retorna máximo un elemento o ninguno en caso de que no lo encuentre


const card = document.querySelector('.card');
console.log(card);


// Podemos tener selectores específicos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);


// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);


// Seleccionar el formulario
const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);


// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);