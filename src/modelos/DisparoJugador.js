class DisparoJugador extends Modelo {

    constructor(x, y, direccion) {
        super(imagenes.disparo_jugador, x, y)
        this.vx = 7 * direccion;
        this.daño = 35;
    }

    actualizar (){
        this.x = this.x + this.vx;
    }

}