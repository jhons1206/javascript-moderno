const nav = document.querySelector('.navegacion');

// Registrar un evento

// nav.addEventListener('click', () => {
//     console.log('click en nav');
// });

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
});

// nav.addEventListener('mouseenter', () => {
//     console.log('entrando a la navegacion');
//     nav.style.backgroundColor = 'red';
// });

// nav.addEventListener('mousedown', () => {
//     console.log('entrando a la navegacion');
//     nav.style.backgroundColor = 'red';
// });

nav.addEventListener('mouseup', () => {
    console.log('entrando a la navegacion');
    nav.style.backgroundColor = 'red';
});


// Eventos con el mouse: //

// click
// dblclick = doble click
// mouseup = cuando sueltas el mouse
// mouseenter = cuando pasas el mouse
// mousedown = cuando das click