// 4. Ejecutar pantalla completa con JS

// Traer todo el HTML usando document.documentElement
// Dependiendo a que hacer PantallaCompleta ahí es donde se 
// coloca el document.documentElement
// En este caso todo el sitio en pantallaCompleta

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);


function pantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
    document.exitFullscreen();
}