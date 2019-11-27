class Nigromante extends Enemigo {

    constructor(x, y) {
        super(imagenes.nigromante, x, y);
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
        this.vida = 75;
        this.daño = 50;
        // Animaciones

    }

    actualizar() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
}