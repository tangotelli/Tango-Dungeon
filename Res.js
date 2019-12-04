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
    demonio_idle_derecha: "res/bigDemonIdleDerecha.png",
    demonio_idle_izquierda: "res/bigDemonIdleIzquierda.png",
    ogro_idle_derecha: "res/ogreIdleDerecha.png",
    ogro_idle_izquierda: "res/ogreIdleIzquierda.png",
    swampy_idle_derecha: "res/swampyIdleDerecha.png",
    swampy_idle_izquierda: "res/swampyIdleIzquierda.png",
    nigromante_idle_derecha: "res/necromancerIdleDerecha.png",
    nigromante_idle_izquierda: "res/necromancerIdleIzquierda.png",
    zombie_idle_derecha: "res/zombieIdleDerecha.png",
    zombie_idle_izquierda: "res/zombieIdleIzquierda.png",
    jugador_idle_derecha: "res/jugador1IdleDerecha.png",
    jugador_idle_izquierda: "res/jugador1IdleIzquierda.png",
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