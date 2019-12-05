// Canvas y contexto del Canvas
var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");
var escaladoMinimo = 1;

// Capas
var layer;
var menuLayer;
var gameLayer;
var pauseLayer;

// Controles
var controles = {};

// Inicio capas y bucle del juego
function iniciarJuego() {
    gameLayer = new GameLayer();
    menuLayer = new MenuLayer();
    pauseLayer = new PauseLayer();
    layer = menuLayer;

    setInterval(loop, 1000 / 30);
}

iniciarJuego();

function loop(){
    console.log("loop - ");

    layer.actualizar();
    if (entrada == entradas.pulsaciones) {
       layer.calcularPulsaciones(pulsaciones);
    }
    layer.procesarControles();
    layer.dibujar();

    actualizarPulsaciones();
}

function actualizarPulsaciones () {
    for(var i=0; i < pulsaciones.length; i++){
        if ( pulsaciones[i].tipo ==  tipoPulsacion.inicio){
            pulsaciones[i].tipo = tipoPulsacion.mantener;
        }
    }
}



