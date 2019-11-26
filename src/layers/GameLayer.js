class GameLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.fondo = new Fondo(imagenes.fondo,480*0.5,320*0.5);

        this.suelos = [];
        this.vacios = [];

        this.cargarMapa("res/0.txt");
    }

    actualizar (){

    }

    dibujar (){
        this.fondo.dibujar();
        for (var i = 0; i < this.suelos.length; i++) {
            this.suelos[i].dibujar();
        }
        for (i = 0; i < this.vacios.length; i++) {
            this.vacios[i].dibujar();
        }
    }

    cargarMapa(ruta) {
        console.log("CARGANDO MAPA");
        var fichero = new XMLHttpRequest();
        fichero.open("GET", ruta, false);

        fichero.onreadystatechange = function () {
            let texto = fichero.responseText;
            let lineas = texto.split("\n");
            this.anchoMapa = (lineas[0].length - 1) * 16;
            this.altoMapa = (lineas.length - 1) * 16;
            for (let i = 0; i < lineas.length; i++) {
                let l = lineas[i];
                for (let j = 0; j < l.length; j++) {
                    let s = l[j];
                    let x = 16/2 + j*16;
                    let y = 16 + i*16;
                    this.cargarObjetoMapa(s, x, y);
                }
            }
        }.bind(this);

        fichero.send();
    }

    cargarObjetoMapa(simbolo, x, y) {
        switch (simbolo) {
            case "#":
                this.generarSuelo(x, y);
                break;
            case ".":
                var vacio = new Vacio(x, y);
                vacio.y = vacio.y - vacio.alto;
                this.vacios.push(vacio);
                break;
        }
    }

    generarSuelo(x, y) {
        var floorType =  Math.floor(Math.random() * (5 - 1) + 1);
        var suelo;
        console.log("CARGANDO SUELO DE TIPO " + floorType);
        switch (floorType) {
            case 1:
                suelo = new Suelo(imagenes.suelo_1, x, y);
                break;
            case 2:
                suelo = new Suelo(imagenes.suelo_2, x, y);
                break;
            case 3:
                suelo = new Suelo(imagenes.suelo_3, x, y);
                break;
            case 4:
                suelo = new Suelo(imagenes.suelo_4, x, y);
                break;
        }
        suelo.y = suelo.y - suelo.alto/2;
        this.suelos.push(suelo);
    }

}
