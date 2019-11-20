class SueloTrampa extends Modelo {

    constructor(x, y) {
        super(imagenes.suelo_trampa, x, y);
        var active = true;
    }

    reactivar(delay) {
        if (delay == 0)
            this.active = true;
        return delay -= 1;
    }
}