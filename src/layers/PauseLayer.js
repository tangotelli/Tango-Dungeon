class PauseLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.fondo = new Fondo(imagenes.fondo, 960 * 0.001, 480 * 0.001);
        this.mensaje = null;
    }

    dibujar() {
        this.fondo.dibujar();
        this.mensaje.dibujar();
    }

    procesarControles() {
        if (controles.continuar) {
            gameLayer = new GameLayer();
            layer = gameLayer;
            controles.continuar = false;
        }
    }

    cambiarMensaje(causa) {
        switch(causa) {
            case 1:
                this.mensaje = new Fondo(imagenes.muerte_agujero, 960 * 0.15, 480 * 0.15);
                break;
            case 2:
                this.mensaje = new Fondo(imagenes.muerte_esbirro, 960 * 0.15, 480 * 0.15);
                break;
            case 3:
                this.mensaje = new Fondo(imagenes.muerte_tarno, 960 * 0.15, 480 * 0.15);
                break;
            case 4:
                this.mensaje = new Fondo(imagenes.muerte_trampa, 960 * 0.15, 480 * 0.15);
                break;
            case 5:
                this.mensaje = new Fondo(imagenes.siguiente_sala, 960 * 0.15, 480 * 0.15);
                break;
            case 6:
                this.mensaje = new Fondo(imagenes.sala_final, 960 * 0.15, 480 * 0.15);
                break;
            case 7:
                this.mensaje = new Fondo(imagenes.victoria, 960 * 0.15, 480 * 0.15);
                break;
        }
    }
}