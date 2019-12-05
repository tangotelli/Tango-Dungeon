class Zombie extends Enemigo {

    constructor(x, y) {
        super(imagenes.zombie, x, y);
        this.vx = 0; // velocidadX
        this.vy = 0; // velocidadY
        this.vxObjetivo = 1;
        this.vida = 100;
        this.texto = new MicroTexto(this.vida, this.x, this.y - this.alto);
        this.daño = 20;
        this.estado = estadosEnemigo.activo;
        this.mayHit = true;
        this.hit = false;
        this.delay = 0;
        this.maxDelay = 100;
        this.orientacion = orientaciones.derecha;
        // Animaciones
        this.aDerecha = new Animacion(imagenes.zombie_derecha, this.ancho, this.alto, 9, 4);
        this.aIzquierda = new Animacion(imagenes.zombie_izquierda, this.ancho, this.alto, 9, 4);
        this.animacion = this.aDerecha;
    }

    actualizar() {
        this.animacion.actualizar();
        //this.x = this.x + this.vx;
        //this.y = this.y + this.vy;
        //Rebote
        if (this.vx == 0) {
            this.vxObjetivo *= -1;
            this.vx = this.vxObjetivo;
            if (this.orientacion == orientaciones.derecha) {
                this.orientacion = orientaciones.izquierda;
            } else {
                this.orientacion = orientaciones.derecha;
            }
        }

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
        return "Zombie";
    }
}