class Cofre extends Modelo {

    constructor(x, y) {
        super(imagenes.cofre, x, y);
        this.estado = estadosTrampa.activa;
        this.vacio = false;
        this.hit = false;
    }

    abrir(vida) {
        this.estado = estadosTrampa.pasiva;
        this.vacio = true;
        vida += 100;
        return vida;
    }
}