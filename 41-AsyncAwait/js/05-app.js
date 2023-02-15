// Async Await hacia una API con Fetch

const url = 'https://picsum.photos/v2/list?limit=100';

document.addEventListener('DOMContentLoaded', obtenerDatos);

// Fetch API (usa Promesas)
// function obtenerDatos() {
//     fetch(url)
//         .then((respuesta) => respuesta.json())
//         .then((resultado) => console.log(resultado))
//         .catch((error) => console.log(error));
// }

// Async await
async function obtenerDatos() {
    try {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}