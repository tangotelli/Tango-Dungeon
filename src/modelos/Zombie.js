class Zombie extends Enemigo {

    constructor(x, y) {
        super(imagenes.zombie, x, y);
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
        this.vida = 100;
        this.daño = 10;
        // Animaciones
        this.aIdleDerecha = new Animacion(imagenes.zombie_idle_derecha, this.ancho, this.alto, 9, 4);
        this.animacion = this.aIdleDerecha;
    }

    actualizar() {
        this.animacion.actualizar();
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

    dibujar() {
        this.animacion.dibujar(this.x, this.y);
    }
}