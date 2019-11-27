class Ogro extends Enemigo {

    constructor(x, y) {
        super(imagenes.ogro, x, y);
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
        this.vida = 150;
        this.daño = 40;
        // Animaciones

    }

    actualizar() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
}