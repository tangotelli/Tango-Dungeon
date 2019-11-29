class GameLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.fondoVidas = new Fondo(imagenes.vida, 960*0.1,320*0.07);
        this.vidas = new Texto(5,960*0.12,320*0.09 );

        this.suelos = [];
        this.vacios = [];
        this.suelosTrampa = [];
        this.agujeros = [];
        this.enemigos = [];

        this.cargarMapa("res/0.txt");
    }

    actualizar (){
        this.jugador.actualizar();
        for (var i = 0; i < this.enemigos.length; i++) {
            this.enemigos[i].actualizar();
        }
         //Agujeros
        for (var j = 0; j < this.agujeros.length; j++) {
            if (this.jugador.colisiona(this.agujeros[j])) {
                // IMPRIMIR MENSAJE MUERTE POR CAIDA
                this.iniciar();
            }
        }
        //Trampas
        for (var k = 0; k < this.suelosTrampa.length; k++) {
            this.suelosTrampa[k].actualizar();
        }
        for (k = 0; k < this.suelosTrampa.length; k++) {
            if (this.jugador.colisiona(this.suelosTrampa[k])) {
                //
            }
        }
    }

    dibujar (){
        for (var i = 0; i < this.suelos.length; i++) {
            this.suelos[i].dibujar();
        }
        for (i = 0; i < this.vacios.length; i++) {
            this.vacios[i].dibujar();
        }
        for (i = 0; i < this.suelosTrampa.length; i++) {
            this.suelosTrampa[i].dibujar();
        }
        for (i = 0; i < this.agujeros.length; i++) {
            this.agujeros[i].dibujar();
        }
        for (i = 0; i < this.enemigos.length; i++) {
            this.enemigos[i].dibujar();
        }
        this.jugador.dibujar();
        this.fondoVidas.dibujar();
        this.vidas.dibujar();
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
                vacio.y = vacio.y - vacio.alto/2;
                this.vacios.push(vacio);
                break;
            case "J":
                this.generarSuelo(x, y);
                this.jugador = new Jugador(x, y);
                this.jugador.y = this.jugador.y - this.jugador.alto/2;
                break;
            case "T":
                var multiplier =  Math.floor(Math.random() * (10 - 1) + 1);
                var sueloTrampa = new SueloTrampa(x, y, multiplier);
                sueloTrampa.y = sueloTrampa.y - sueloTrampa.alto/2;
                this.suelosTrampa.push(sueloTrampa);
                break;
            case "A":
                var agujero = new Agujero(x, y);
                agujero.y = agujero.y - agujero.alto/2;
                this.agujeros.push(agujero);
                break;
            case "D":
                this.generarSuelo(x, y);
                var demonio = new Demonio(x, y);
                demonio.y = demonio.y - demonio.alto/2;
                this.enemigos.push(demonio);
                break;
            case "O":
                this.generarSuelo(x, y);
                var ogro = new Ogro(x, y);
                ogro.y = ogro.y - ogro.alto/2;
                this.enemigos.push(ogro);
                break;
            case "N":
                this.generarSuelo(x, y);
                var nigromante = new Nigromante(x, y);
                nigromante.y = nigromante.y - nigromante.alto/2;
                this.enemigos.push(nigromante);
                break;
            case "M":
                this.generarSuelo(x, y);
                var monstruo = new MonstruoDelPantano(x, y);
                monstruo.y = monstruo.y - monstruo.alto/2;
                this.enemigos.push(monstruo);
                break;
            case "Z":
                this.generarSuelo(x, y);
                var zombie = new Zombie(x, y);
                zombie.y = zombie.y - zombie.alto/2;
                this.enemigos.push(zombie);
                break;
        }
    }

    generarSuelo(x, y) {
        var floorType =  Math.floor(Math.random() * (5 - 1) + 1);
        var suelo;
        //console.log("CARGANDO SUELO DE TIPO " + floorType);
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

    procesarControles( ){
        // disparar
        if (  controles.disparo ){

        }

        // Eje X
        if ( controles.moverX > 0 ){
            this.jugador.moverX(1);

        }else if ( controles.moverX < 0){
            this.jugador.moverX(-1);

        } else {
            this.jugador.moverX(0);
        }

        // Eje Y
        if ( controles.moverY > 0 ){
            this.jugador.moverY(-1);

        } else if ( controles.moverY < 0 ){
            this.jugador.moverY(1);

        } else {
            this.jugador.moverY(0);
        }

    }


}
