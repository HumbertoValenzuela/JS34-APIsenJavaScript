// 6. Speech recognition API
// Permite que cuando yo hable JS pueda saber lo que yo estoy 
// diciendo con el micrófono hacia mi página web
// El usuario debe dar permisos para acceder al micrófono
// Pocos navegadores reconocen SpeechAPI, Android, chrome Edge

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI(params) {
    const SpeechRecognition = webkitSpeechRecognition;
    // Instanciar, crear un nuevo Objeto de SpeechRecognition
    const recognition = new SpeechRecognition();

    // Arrancar Recognition
    recognition.start();

    // Comenzar a Escuchar
    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    };
    // Cuando termina de hablar
    recognition.onspeechend = function() {
        salida.textContent = 'Se dejo de Grabar...';
        recognition.stop();
    }
    // Y Cuando mostramos el resultado
    recognition.onresult = function(e) {
        console.log(e.results);
        // confidence: 0.9876291155815125 indica el % de acierto
        // transcript: "hola como estas"
        console.log(e.results[0][0]);

        // Mostrar en HTML lo que Hablas
        const {confidence, transcript} = e.results[0][0];
        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;
        // Mostrar el % de Acierto
        const seguridad = document.createElement('p');
        seguridad.innerHTML = `El Acierto es de: % ${parseInt( confidence * 100) }`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    }
}