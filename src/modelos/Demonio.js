class Demonio extends Enemigo {

    constructor(x, y) {
        super(imagenes.demonio, x, y);
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
        this.vida = 500;
        this.daño = 100;
        // Animaciones

    }

    actualizar() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
}