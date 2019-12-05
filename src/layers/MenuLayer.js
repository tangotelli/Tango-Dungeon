class MenuLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.fondo = new Fondo(imagenes.fondo, 960 * 0.001, 480 * 0.001);
        this.mensaje = new Fondo(imagenes.menu_inicio, 960 * 0.15, 480 * 0.15);
        this.botonContinuar = new Boton(imagenes.boton_continuar, 960 * 0.45, 480 * 0.85);
    }

    dibujar() {
        this.fondo.dibujar();
        this.mensaje.dibujar();
        this.botonContinuar.dibujar();
    }

    calcularPulsaciones(pulsaciones){
        this.botonContinuar.pulsado = false;

        for(var i=0; i < pulsaciones.length; i++){
            if (this.botonContinuar.contienePunto(pulsaciones[i].x , pulsaciones[i].y) ){
                this.botonContinuar.pulsado = true;
                if ( pulsaciones[i].tipo == tipoPulsacion.inicio) {
                    controles.continuar = true;
                }
            }
        }

        if ( !this.botonContinuar.pulsado ){
            controles.continuar = false;
        }
    }


    procesarControles() {
        if (controles.continuar) {
            gameLayer = new GameLayer();
            layer = gameLayer;
            controles.continuar = false;
        }
    }
}
