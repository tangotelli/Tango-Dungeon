class SueloTrampa extends Modelo {

    constructor(x, y, multiplier) {
        super(imagenes.suelo_trampa, x, y);
        this.estadoTrampa = estadosTrampa.pasiva;
        this.delay = 0;
        this.maxDelay = 100 * multiplier;
        // Animaciones
        this.animActiva = new Animacion(imagenes.trampa_anim, this.ancho, this.alto, 6, 4, this.finAtaque.bind(this));
        this.animPasiva = new Animacion(imagenes.suelo_trampa, this.ancho, this.alto, 10, 1);
        this.animacion = this.animPasiva;
    }

    actualizar() {
        this.animacion.actualizar();

        switch(this.estadoTrampa) {
            case estadosTrampa.activa:
                this.animacion = this.animActiva;
                break;
            case estadosTrampa.pasiva:
                this.delay++;
                if (this.delay == this.maxDelay) {
                    this.estadoTrampa = estadosTrampa.activa;
                    this.delay = 0;
                }
                break;
        }
    }

    dibujar() {
        this.animacion.dibujar(this.x, this.y);
    }

    finAtaque() {
        this.estadoTrampa = estadosTrampa.pasiva;
        this.animacion = this.animPasiva;
    }
}