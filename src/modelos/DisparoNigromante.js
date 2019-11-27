class DisparoNigromante extends Modelo {

    constructor(x, y) {
        super(imagenes.disparo_nigromante, x, y)
        this.vx = 9;
    }

    actualizar (){
        this.x = this.x + this.vx;
    }

}