class Espada extends Modelo {

    constructor(x, y) {
        super(imagenes.espada, x, y);
        this.delay = 0;
        this.maxDelay = 50;
        this.daño = 50;
        this.mayHit = true;
        this.hit = false;
        this.estado = estadosEspada.activa;
        this.orientacion = orientaciones.derecha;
        // Animaciones
        this.animAtaqueDerecha = new Animacion(imagenes.espada_ataque_derecha, this.ancho, this.alto, 5, 5, this.finAtaque.bind(this));
        this.animAtaqueIzquierda = new Animacion(imagenes.espada_ataque_izquierda, this.ancho, this.alto, 5, 5, this.finAtaque.bind(this));
        this.animPasiva = new Animacion(imagenes.espada, this.ancho, this.alto, 10, 1);
        this.animacion = this.animPasiva;
    }

    actualizar() {
        this.animacion.actualizar();

        if (this.hit == true) {
            this.estado = estadosEspada.pasiva;
            this.hit = false;
        }

        switch (this.estado) {
            case estadosEspada.activa:
                this.mayHit = true;
                break;
            case estadosEspada.pasiva:
                this.mayHit = false;
                this.delay++;
                if (this.delay == this.maxDelay) {
                    this.estado = estadosEspada.activa;
                    this.delay = 0;
                }
                break;
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

    atacar() {
        if (this.estado == estadosEspada.activa) {
            this.estado = estadosEspada.atacando;
            if (this.orientacion == orientaciones.derecha) {
                this.animacion = this.animAtaqueDerecha;
            } else {
                this.animacion = this.animAtaqueIzquierda;
            }
        }
    }

    finAtaque() {
        this.hit = false;
        this.animacion = this.animPasiva;
        this.estado = estadosEspada.pasiva;
    }

}