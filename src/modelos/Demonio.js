class Demonio extends Enemigo {

    constructor(x, y) {
        super(imagenes.demonio, x, y);
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
        this.velocidad = 0.5;
        this.vida = 500;
        this.texto = new MicroTexto(this.vida, this.x, this.y - this.alto);
        this.daño = 100;
        this.estado = estadosEnemigo.activo;
        this.mayHit = true;
        this.hit = false;
        this.delay = 0;
        this.maxDelay = 100;
        this.orientacion = orientaciones.derecha;
        // Animaciones
        this.aDerecha = new Animacion(imagenes.demonio_derecha, this.ancho, this.alto, 6, 4);
        this.aIzquierda = new Animacion(imagenes.demonio_izquierda, this.ancho, this.alto, 6, 4);
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
        this.texto.desplazar(this.vx, this.vy);

        if (this.hit == true) {
            this.estado = estadosEnemigo.pasivo;
            this.hit = false;
        }

        switch(this.estado) {
            case estadosEnemigo.activo:
                this.mayHit = true;
                break;
            case estadosEnemigo.pasivo:
                this.mayHit = false;
                this.delay++;
                if (this.delay == this.maxDelay) {
                    this.estado = estadosEnemigo.activo;
                    this.delay = 0;
                }
                break;
        }
    }

    dibujar() {
        this.animacion.dibujar(this.x, this.y);
    }

    tipo() {
        return "Demonio";
    }

    rotar(posicion) {
        if (posicion < this.x) {
            this.orientacion = orientaciones.izquierda;
        } else if (posicion > this.x) {
            this.orientacion = orientaciones.derecha;
        }
    }

    perseguir(xJugador, yJugador) {
        if (xJugador < this.x) {
            this.vx = this.velocidad * -1;
        } else if (xJugador > this.x) {
            this.vx = this.velocidad * 1;
        } else {
            this.vx = 0;
        }
        if (yJugador < this.y) {
            this.vy = this.velocidad * -1;
        } else if (yJugador > this.y) {
            this.vy = this.velocidad * 1;
        } else {
            this.vy = 0;
        }
    }
}