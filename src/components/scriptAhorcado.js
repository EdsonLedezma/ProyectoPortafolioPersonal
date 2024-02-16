var fondos = ["fondo.jpg", "fondo1.jpg", "fondo2.jpg", "fondo3.jpg", "fondo4.jpg", "fondo5.jpg"];
var palabras = ["javascript", "televisor", "lamborghini", "programacion", "desarrollo"];

var palabraSecreta = "";
var palabraAdivinanza = [];
var intentos = 6;
var letrasIncorrectas = [];
var contadorErrores = 0; 

function iniciarJuego() {   
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];   
    palabraAdivinanza = new Array(palabraSecreta.length).fill('_');  
    intentos = 6;
    letrasIncorrectas = [];
    contadorErrores = 0; 

   
    document.body.style.backgroundImage = "url('" + fondos[0] + "')";

    actualizarPantalla();
}

function adivinarLetra() {
    var letraInput = document.getElementById("letraInput").value.toLowerCase();
    
    if (palabraAdivinanza.indexOf(letraInput) !== -1 || letrasIncorrectas.indexOf(letraInput) !== -1) {
        alert("Ya adivinaste esa letra o ya no tienes más intentos.");
        return;
    }
    
    if (palabraSecreta.indexOf(letraInput) !== -1) {        
        for (var i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letraInput) {
                palabraAdivinanza[i] = letraInput;
            }
        }
     
        if (palabraAdivinanza.indexOf('_') === -1) {
            alert("¡Felicidades! Adivinaste la palabra: " + palabraSecreta);
            iniciarJuego();
        }
    } else {        
        intentos--;       
        letrasIncorrectas.push(letraInput);      
        contadorErrores++; 
        
        if (intentos === 0) {
            alert("¡Perdiste! La palabra era: " + palabraSecreta);
            iniciarJuego();
        } else {
            cambiarFondo();
        }
    }   
    actualizarPantalla();
}

function cambiarFondo() {
   
    document.body.style.backgroundImage = "url('" + fondos[contadorErrores] + "')";
}

function actualizarPantalla() {
    document.getElementById("palabraAdivinanza").textContent = palabraAdivinanza.join(' ');
    document.getElementById("intentos").textContent = intentos;
    document.getElementById("incorrectas").textContent = letrasIncorrectas.join(', ');
    document.getElementById("letraInput").value = "";
}

iniciarJuego(); 
