// Canvas y contexto del Canvas
var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");
var escaladoMinimo = 1;

// Capas
var gameLayer;

// Controles
var controles = {};

// Inicio capas y bucle del juego
function iniciarJuego() {
    gameLayer = new GameLayer();
    setInterval(loop, 1000 / 30);
}

iniciarJuego();

function loop(){
    console.log("loop - ")
    gameLayer.actualizar();
    gameLayer.procesarControles();
    gameLayer.dibujar();
}


