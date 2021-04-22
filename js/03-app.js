// 3. Detectar si hay conexión a internet o no
// Es muy común tener algo asi no? Uber cuando estas buscando tu transporte y si pierdes tu conexión
// te dice que no estas conectado. en javascript también es posible capturar algo asi

// console.log(window.navigator.onLine)

//  Activar o desactivar... NETWORK 
// Para revisar en el navegador chrome ir a Inpeccionar - application - Service Workers - Offline checked or not


window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    console.log(window.navigator.onLine)
    if (navigator.onLine === true) { //Devuelve true o false
        console.log('Si estas conectado');
    } else {
        console.log('No esta conectado');
    }
}
/*--------------------------------------------------------------------*/
const checkOnlineStatus = async () => {
    try {
        const online = await fetch('img/logoHumberto.png');
        return online.status >= 200 && online.status <= 300; //either
    } catch (err) {
        return false; // Definintely offline
    }
};

setInterval(async () => {
    const result = await checkOnlineStatus();
    const statusDisplay = document.getElementById('status');
    statusDisplay.textContent = result ? 'Online' : 'Offline';
}, 3000);

