class Jugador extends Modelo {
    constructor(x, y) {
        super(imagenes.jugador, x, y)
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY

        this.orientacion = orientaciones.derecha;
        // Animaciones
        this.aIdleDerecha = new Animacion(imagenes.jugador_idle_derecha, this.ancho, this.alto, 10, 4);
        this.aIdleIzquierda = new Animacion(imagenes.jugador_idle_izquierda, this.ancho, this.alto, 10, 4);
        this.animacion = this.aIdleDerecha;
    }

    actualizar() {
        this.animacion.actualizar();
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if (this.orientacion == orientaciones.derecha) {
            this.animacion = this.aIdleDerecha;
        }
        else {
            this.animacion = this.aIdleIzquierda;
        }
    }

    dibujar() {
        this.animacion.dibujar(this.x, this.y);
    }

    moverX (direccion){
        this.vx = direccion * 3;
    }

    moverY (direccion){
        this.vy = direccion * 3;
    }
}