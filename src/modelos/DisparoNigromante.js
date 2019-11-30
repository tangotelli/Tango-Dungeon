class DisparoNigromante extends Modelo {

    constructor(x, y, direccion) {
        super(imagenes.disparo_nigromante, x, y)
        this.vx = 9 * direccion;
        this.daño = 50;
    }

    actualizar (){
        //this.x = this.x + this.vx;
    }

}