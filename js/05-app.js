// 5. Detectar cuando estamos viendo la página web actual

// cuando estamos viendo NetFlix luego cambiamos de ventana.
// Netflix detiene la reproducción.
// ¿Cómo sabe que ya no la estamos viendo?
// Veremos una API Visibility States
// document.visibilityState muestra el estado 

// visibilitychange al cambiar de ventana
document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState);// hidden visible

    if (document.visibilityState === 'visible') {
        console.log('Reproducir el Video');
    } else {
        console.log('Pausar el Video');
    }
})
