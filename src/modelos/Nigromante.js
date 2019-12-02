class Nigromante extends Enemigo {

    constructor(x, y) {
        super(imagenes.nigromante, x, y);
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
        this.vida = 75;
        this.texto = new MicroTexto(this.vida, this.x, this.y - this.alto);
        this.orientacion = orientaciones.derecha;
        // Animaciones
        this.aIdleDerecha = new Animacion(imagenes.nigromante_idle_derecha, this.ancho, this.alto, 12, 4);
        this.aIdleIzquierda = new Animacion(imagenes.nigromante_idle_izquierda, this.ancho, this.alto, 12, 4);
        this.animacion = this.aIdleDerecha;
    }

    actualizar() {
        this.animacion.actualizar();
        //this.x = this.x + this.vx;
        //this.y = this.y + this.vy;

        if (this.orientacion == orientaciones.derecha) {
            this.animacion = this.aIdleDerecha;
        } else {
            this.animacion = this.aIdleIzquierda;
        }

        this.texto.valor = this.vida;
    }

    dibujar() {
        this.animacion.dibujar(this.x, this.y);
    }

    tipo() {
        return "Nigromante";
    }

    rotar(posicion) {
        if (posicion < this.x) {
            this.orientacion = orientaciones.izquierda;
        } else {
            this.orientacion = orientaciones.derecha;
        }
    }
}