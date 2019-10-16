class GameLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.fondo = new Fondo(imagenes.fondo,480*0.5,320*0.5);
    }

    actualizar (){

    }

    dibujar (){
        this.fondo.dibujar();
    }

}
