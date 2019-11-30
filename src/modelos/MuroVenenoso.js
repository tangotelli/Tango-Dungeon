class MuroVenenoso extends Modelo {

    constructor(x, y) {
        super(imagenes.pantano_muro, x, y);
        this.estadoTrampa = estadosTrampa.activa;
        this.delay = 0;
        this.maxDelay = 100;
        this.hit = false;
    }

    actualizar() {
        switch(this.estadoTrampa) {
            case estadosTrampa.activa:
                if (this.hit) {
                    this.hit = false;
                    this.estadoTrampa = estadosTrampa.pasiva;
                }
                break;
            case estadosTrampa.pasiva:
                this.delay++;
                if (this.delay == this.maxDelay) {
                    this.estadoTrampa = estadosTrampa.activa;
                    this.delay = 0;
                    this.hit = false;
                }
                break;
        }
    }
}