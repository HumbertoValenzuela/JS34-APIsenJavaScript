// Permite identificar cuando un elemento esta visible
// Previamente vimos getclientRect, que nos permitía identificar cuando un elemento estaba visible, existe otra API llamada Intersection Observer, veamos como utilizarla..

// carga diferida (en inglés lazy loading) es un patrón de 
// diseño comúnmente usado en la programación informática que 
//  consiste en retrasar la carga o inicialización de un  
// objeto hasta el mismo momento de su utilización. 


document.addEventListener('DOMContentLoaded', () => {
    // Ejemplos de aplicación. Scroll infinito. Agregar lazy loading con imágenesy usando IntersectionObserver

    // Nos permite identificar un elemento una vez que es 
    // visible en el viewPort del navegador

    // Habilitar IntersectionObserver
    const observer = new IntersectionObserver( (entries) => {
        // 
         console.log(entries[0]);
         if (entries[0].isIntersecting) {
             console.log('Ya esta visible');
         }
    })
    // Que elemento va a revisar IntersectionObserver
    observer.observe(document.querySelector('.premium'));
})