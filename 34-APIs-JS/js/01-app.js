// Notification API

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es ', resultado);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    console.log('Entro');
    if(Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Codigo con Juan: Aprende con proyectos reales'
        });

        notificacion.onclick = function() {
            window.open('https://codigoconjuan.com')
        }
    }
});