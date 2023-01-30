// Detectar si hay conexión a Internet

window.addEventListener('onLine', actualizarEstado);
window.addEventListener('offLine', actualizarEstado);

function actualizarEstado() {
    if(navigator.onLine) {
        console.log('Si estas conectado');
    } else {
        console.log('No estas conectado');
    }
}