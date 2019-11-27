class Zombie extends Enemigo {

    constructor(x, y) {
        super(imagenes.zombie, x, y);
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
        this.vida = 100;
        this.daño = 10;
        // Animaciones

    }

    actualizar() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
}