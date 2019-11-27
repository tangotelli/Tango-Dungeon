class MonstruoDelPantano extends Enemigo {

    constructor(x, y) {
        super(imagenes.monstruo_del_pantano, x, y);
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
        this.vida = 75;
        this.daño = 10;
        // Animaciones

    }

    actualizar() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
}