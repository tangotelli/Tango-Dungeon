class MenuLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.fondo = new Fondo(imagenes.fondo, 960 * 0.001, 480 * 0.001);
        this.mensaje = new Fondo(imagenes.menu_inicio, 960 * 0.15, 480 * 0.15);
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
}
