// Lista re recursos a precargar
var imagenes = {
    fondo : "res/fondo.png",
    fondo2 : "res/fondo2.png",
    suelo_trampa: "res/floor_spikes.png",
    suelo_1: "res/floor_1.png",
    suelo_2: "res/floor_2.png",
    suelo_3: "res/floor_3.png",
    suelo_4: "res/floor_4.png",
    vacio: "res/vacio.png",
    jugador: "res/jugador1.png",
    agujero: "res/hole.png",
    demonio: "res/big_demon.png",
    nigromante: "res/necromancer.png",
    ogro: "res/ogre.png",
    monstruo_del_pantano: "res/swampy.png",
    zombie: "res/zombie.png",
    disparo_nigromante: "res/disparo_nigromante.png",
    demonio_idle_derecha: "res/bigDemonIdleDerecha.png",
    ogro_idle_derecha: "res/ogreIdleDerecha.png",
    swampy_idle_derecha: "res/swampyIdleDerecha.png",
};

var rutasImagenes = Object.values(imagenes);
cargarImagenes(0);

function cargarImagenes(indice){
    var imagenCargar = new Image();
    imagenCargar.src = rutasImagenes[indice];
    imagenCargar.onload = function(){
        if ( indice < rutasImagenes.length-1 ){
            indice++;
            cargarImagenes(indice);
        } else {
            iniciarJuego();
        }
    }
}