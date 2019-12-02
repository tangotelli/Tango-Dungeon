class Fuente extends Modelo {

    constructor(x, y) {
        super(imagenes.fuente, x, y);
        this.hit = false;
        this.estado = estadosTrampa.pasiva;
        // Animaciones
        this.animFluyendo = new Animacion(imagenes.fuente_fluyendo, this.ancho, this.alto, 6, 3);
        this.animacion = this.animFluyendo;
    }

    actualizar() {
        this.animacion.actualizar();
    }

    dibujar() {
        this.animacion.dibujar(this.x, this.y);
    }

    activar() {
        this.estado = estadosTrampa.activa;
    }
}