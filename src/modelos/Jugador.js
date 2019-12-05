class Jugador extends Modelo {
    constructor(x, y) {
        super(imagenes.jugador, x, y)
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY

        this.orientacion = orientaciones.derecha;
        // Animaciones
        this.aDerecha = new Animacion(imagenes.jugador_derecha, this.ancho, this.alto, 10, 4);
        this.aIzquierda = new Animacion(imagenes.jugador_izquierda, this.ancho, this.alto, 10, 4);
        this.animacion = this.aDerecha;

        //Disparos
        this.cadenciaDisparo = 30;
        this.tiempoDisparo = 0;
    }

    actualizar() {
        this.animacion.actualizar();
        //this.x = this.x + this.vx;
        //this.y = this.y + this.vy;

        if (this.orientacion == orientaciones.derecha) {
            this.animacion = this.aDerecha;
        }
        else {
            this.animacion = this.aIzquierda;
        }

        //Disparos
        if ( this.tiempoDisparo > 0 ) {
            this.tiempoDisparo--;
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

    disparar() {
        if (this.tiempoDisparo == 0) {
            this.tiempoDisparo = this.cadenciaDisparo;
            var disparo;
            if (this.orientacion == orientaciones.derecha) {
                disparo = new DisparoJugador(this.x, this.y, 1);
            }
            else {
                disparo = new DisparoJugador(this.x, this.y, -1);
            }
            return disparo;
        }
        return null;
    }
}