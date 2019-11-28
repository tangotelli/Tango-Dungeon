class Demonio extends Enemigo {

    constructor(x, y) {
        super(imagenes.demonio, x, y);
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
        this.vida = 500;
        this.daño = 100;
        // Animaciones
        this.aIdleDerecha = new Animacion(imagenes.demonio_idle_derecha, this.ancho, this.alto, 6, 4);
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