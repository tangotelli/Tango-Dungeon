class Nigromante extends Enemigo {

    constructor(x, y) {
        super(imagenes.nigromante, x, y);
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
        this.vida = 75;
        this.texto = new MicroTexto(this.vida, this.x, this.y - this.alto);
        this.orientacion = orientaciones.derecha;
        // Animaciones
        this.aDerecha = new Animacion(imagenes.nigromante_derecha, this.ancho, this.alto, 12, 4);
        this.aIzquierda = new Animacion(imagenes.nigromante_izquierda, this.ancho, this.alto, 12, 4);
        this.animacion = this.aDerecha;
    }

    actualizar() {
        this.animacion.actualizar();
        //this.x = this.x + this.vx;
        //this.y = this.y + this.vy;

        if (this.orientacion == orientaciones.derecha) {
            this.animacion = this.aDerecha;
        } else {
            this.animacion = this.aIzquierda;
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