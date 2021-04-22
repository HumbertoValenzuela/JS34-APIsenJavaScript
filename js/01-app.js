// 1. Notification API

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    //API nativa de JS Notification
    //Método requestPermission que pregunta al usuario por el permiso
    // Casi todas las APIs de JS utilizan Promise
    Notification.requestPermission()//Crear una Notificación
                .then(resultado => {
                    console.log('El resultado es ', resultado);// si acepta el resultado es granted. No al permiso el resultado es denied
                })
});

const verNotificacion = document.querySelector('#verNotificacion');

// Si el usuario acepta la notificación entonces verNotificacion
// Al dar click ejecutar la función anónima
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        // el mensaje, el objeto
        const notificacion = new Notification(' Click a Mi Página Web', {
            icon: 'img/logoHumberto.png',
            body: 'Ir a mi PortaFolio, para aprender.'
        });

        // Al dar click en la notificación ir a una web
        notificacion.onclick = function() {
            window.open('https://humbertovalenzuela.github.io/hrvg/')
        }
    }
})