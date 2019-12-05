// Lista re recursos a precargar
var imagenes = {
    fondo : "res/fondo.png",
    fondo2 : "res/fondo2.png",
    suelo_trampa: "res/floor_spikes.png",
    trampa_anim: "res/floor_spikes_anim.png",
    suelo_1: "res/floor_1.png",
    suelo_2: "res/floor_2.png",
    suelo_3: "res/floor_3.png",
    suelo_4: "res/floor_4.png",
    vacio: "res/vacio.png",
    jugador: "res/jugador1.png",
    agujero: "res/hole.png",
    cofre: "res/chest.png",
    muro: "res/wall.png",
    agujero_muro: "res/wall_hole.png",
    pantano_muro: "res/wall_goo.png",
    fuente: "res/fountain.png",
    fuente_fluyendo: "res/fountainFlow.png",
    demonio: "res/big_demon.png",
    nigromante: "res/necromancer.png",
    ogro: "res/ogre.png",
    monstruo_del_pantano: "res/swampy.png",
    zombie: "res/zombie.png",
    disparo_nigromante: "res/disparo_nigromante.png",
    disparo_jugador: "res/sword_arrojadiza.png",
    demonio_derecha: "res/bigDemonIdleDerecha.png",
    demonio_izquierda: "res/bigDemonIdleIzquierda.png",
    ogro_derecha: "res/ogreIdleDerecha.png",
    ogro_izquierda: "res/ogreIdleIzquierda.png",
    swampy_derecha: "res/swampyIdleDerecha.png",
    swampy_izquierda: "res/swampyIdleIzquierda.png",
    nigromante_derecha: "res/necromancerIdleDerecha.png",
    nigromante_izquierda: "res/necromancerIdleIzquierda.png",
    zombie_derecha: "res/zombieIdleDerecha.png",
    zombie_izquierda: "res/zombieIdleIzquierda.png",
    jugador_derecha: "res/jugador1IdleDerecha.png",
    jugador_izquierda: "res/jugador1IdleIzquierda.png",
    vida: "res/vida.png",
    espada: "res/espada.png",
    espada_ataque_derecha: "res/espadaAtaqueDerecha.png",
    espada_ataque_izquierda: "res/espadaAtaqueIzquierda.png",
    menu_inicio: "res/mensaje_inicial.png",
    muerte_agujero: "res/mensaje_agujero.png",
    muerte_esbirro: "res/mensaje_muerte_esbirro.png",
    muerte_tarno: "res/mensaje_muerte_tarno.png",
    muerte_trampa: "res/mensaje_muerte_trampa.png",
    siguiente_sala: "res/mensaje_siguiente_sala.png",
    sala_final: "res/mensaje_sala_final.png",
    victoria: "res/mensaje_victoria.png",
    boton_golpear: "res/boton_golpear.png",
    boton_cuchillos: "res/boton_cuchillo.png",
    boton_interactuar: "res/boton_interactuar.png",
    boton_continuar: "res/boton_continuar.png",
    pad: "res/pad.png",
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