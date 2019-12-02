class GameLayer extends Layer {

    constructor() {
        super();
        this.iniciar();
    }

    iniciar() {
        this.espacio = new Espacio(0);

        this.fondoVidas = new Fondo(imagenes.vida, 960*0.1,320*0.07);
        this.vida = new Texto(300,960*0.12,320*0.09 );

        this.suelos = [];
        this.vacios = [];
        this.suelosTrampa = [];
        this.agujeros = [];
        this.enemigos = [];
        this.disparosNigromante = [];
        this.disparosJugador = [];
        this.muros = [];
        this.murosVenenosos = [];
        this.muertos = 0;

        this.cargarMapa("res/0.txt");
        this.totalEnemigos = this.enemigos.length;
    }

    actualizar (){
        this.espacio.actualizar();
        this.jugador.actualizar();
        //Espada
        this.espada.actualizar();
        for (var i = 0; i < this.enemigos.length; i++) {
            if (this.enemigos[i].colisiona(this.espada)) {
                if ((this.espada.estado == estadosEspada.atacando) && (this.espada.mayHit == true)) {
                    this.espada.hit = true;
                    this.enemigos[i].vida -= this.espada.daño;
                    if (this.enemigos[i].vida <= 0) {
                        this.espacio.eliminarDinamico(this.enemigos[i]);
                        this.enemigos.splice(i, 1);
                        this.muertos += 1;
                    }
                }
            }
        }
        //Enemigos
        for (i = 0; i < this.enemigos.length; i++) {
            this.enemigos[i].actualizar();
        }
        for (i = 0; i < this.enemigos.length; i++) {
            if (this.jugador.colisiona(this.enemigos[i])) {
                switch (this.enemigos[i].tipo()) {
                    case "Nigromante":
                        break;
                    default:
                        if (this.enemigos[i].mayHit == true) {
                            this.vida.valor -= this.enemigos[i].daño ;
                            this.enemigos[i].hit = true;
                        }
                        break;
                }
            }
        }
        //Disparos Nigromante
        if (this.delayDisparoNigromante == null){
            this.delayDisparoNigromante = 0;
        }
        this.delayDisparoNigromante--;

        if ( this.delayDisparoNigromante < 0){
            for (i = 0; i < this.enemigos.length; i++) {
                if (this.enemigos[i].tipo() == "Nigromante") {
                    var dnX = this.enemigos[i].x;
                    var dnY = this.enemigos[i].y;
                    var direccion;
                    if (this.enemigos[i].orientacion == orientaciones.derecha) {
                        direccion = 1;
                    }
                    else {
                        direccion = -1;
                    }
                }
            }
            var disparoN = new DisparoNigromante(dnX, dnY, direccion);
            this.disparosNigromante.push(disparoN);
            this.espacio.agregarDinamico(disparoN);
            this.delayDisparoNigromante = 100;
        }
        for (i = 0; i < this.disparosNigromante.length; i++) {
            this.disparosNigromante[i].actualizar();
        }
        for (i = 0; i < this.disparosNigromante.length; i++) {
            if (this.jugador.colisiona(this.disparosNigromante[i])) {
                this.vida.valor -= this.disparosNigromante[i].daño;
                this.espacio.eliminarDinamico(this.disparosNigromante[i]);
                this.disparosNigromante.splice(i, 1);
            }
        }
        for (i = 0; i < this.disparosNigromante.length; i++) {
            for (var m = 0; m < this.muros.length; m++) {
                if (this.disparosNigromante[i].colisiona(this.muros[m])) {
                    this.espacio.eliminarDinamico(this.disparosNigromante[i]);
                    this.disparosNigromante.splice(i, 1);
                }
            }
            for (m = 0; m < this.murosVenenosos.length; m++) {
                if (this.disparosNigromante[i].colisiona(this.murosVenenosos[m])) {
                    this.espacio.eliminarDinamico(this.disparosNigromante[i]);
                    this.disparosNigromante.splice(i, 1);
                }
            }
        }
        //Disparos
        for (i = 0; i < this.disparosJugador.length; i++) {
            this.disparosJugador[i].actualizar();
        }
        for (i = 0; i < this.disparosJugador.length; i++) {
            for (var l = 0; l < this.enemigos.length; l++) {
                if (this.disparosJugador[i].colisiona(this.enemigos[l])) {
                    this.enemigos[l].vida -= this.disparosJugador[i].daño;
                    if (this.enemigos[l].vida <= 0) {
                        this.espacio.eliminarDinamico(this.enemigos[l]);
                        this.enemigos.splice(l, 1);
                        this.muertos += 1;
                    }
                    this.espacio.eliminarDinamico(this.disparosJugador[i]);
                    this.disparosJugador.splice(i, 1);
                }
            }
        }
        for (i = 0; i < this.disparosJugador.length; i++) {
            for (var m = 0; m < this.muros.length; m++) {
                if (this.disparosJugador[i].colisiona(this.muros[m])) {
                    this.espacio.eliminarDinamico(this.disparosJugador[i]);
                    this.disparosJugador.splice(i, 1);
                }
            }
            for (m = 0; m < this.murosVenenosos.length; m++) {
                if (this.disparosJugador[i].colisiona(this.murosVenenosos[m])) {
                    this.espacio.eliminarDinamico(this.disparosJugador[i]);
                    this.disparosJugador.splice(i, 1);
                }
            }
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
                if ((this.suelosTrampa[k].estadoTrampa == estadosTrampa.activa) && (this.suelosTrampa[k].hit == false)) {
                    this.vida.valor -= 100;
                    this.suelosTrampa[k].hit = true;
                }
            }
        }
        //Muros venenosos
        for (k = 0; k < this.murosVenenosos.length; k++) {
            this.murosVenenosos[k].actualizar();
        }
        for (k = 0; k < this.murosVenenosos.length; k++) {
            if (this.jugador.colisiona(this.murosVenenosos[k])) {
                if ((this.murosVenenosos[k].estadoTrampa == estadosTrampa.activa) && (this.murosVenenosos[k].hit == false)) {
                    this.vida.valor -= 5;
                    this.murosVenenosos[k].hit = true;
                }
            }
        }
        //Fuente
        this.fuente.actualizar();
        if (this.muertos == this.totalEnemigos) {
            this.fuente.activar();
        }
        if (this.jugador.colisiona(this.fuente)) {
            this.fuente.hit = true;
        }
        else {
            this.fuente.hit = false;
        }
    }

    dibujar (){
        for (var i = 0; i < this.suelos.length; i++) {
            this.suelos[i].dibujar();
        }
        for (i = 0; i < this.muros.length; i++) {
            this.muros[i].dibujar();
        }
        for (i = 0; i < this.murosVenenosos.length; i++) {
            this.murosVenenosos[i].dibujar();
        }
        this.fuente.dibujar();
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
            this.enemigos[i].texto.dibujar();
        }
        for (i = 0; i < this.disparosNigromante.length; i++) {
            this.disparosNigromante[i].dibujar();
        }
        for (i = 0; i < this.disparosJugador.length; i++) {
            this.disparosJugador[i].dibujar();
        }
        this.espada.dibujar();
        this.jugador.dibujar();
        this.fondoVidas.dibujar();
        this.vida.dibujar();
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
                this.espacio.agregarEstaticoNoPisable(vacio);
                break;
            case "@":
                var muro = new Muro(x, y);
                muro.y = muro.y - muro.alto/2;
                this.muros.push(muro);
                this.espacio.agregarEstaticoNoPisable(muro);
                break;
            case "F":
                this.fuente = new Fuente(x, y);
                this.fuente.y = this.fuente.y - this.fuente.alto/2;
                this.espacio.agregarEstaticoNoPisable(this.fuente);
                break;
            case "V":
                var muroVenenoso = new MuroVenenoso(x, y);
                muroVenenoso.y = muroVenenoso.y - muroVenenoso.alto/2;
                this.murosVenenosos.push(muroVenenoso);
                this.espacio.agregarEstaticoNoPisable(muroVenenoso);
                break;
            case "J":
                this.generarSuelo(x, y);
                this.jugador = new Jugador(x, y);
                this.jugador.y = this.jugador.y - this.jugador.alto/2;
                this.espacio.agregarDinamico(this.jugador);
                //console.log(this.jugador.x, this.jugador.y);
                this.espada = new Espada(x + this.jugador.ancho/2, y - this.jugador.alto/3);
                this.espada.y = this.espada.y - this.espada.alto/2;
                this.espacio.agregarDinamico(this.espada);
                //console.log(this.espada.x, this.espada.y);
                break;
            case "T":
                var multiplier =  Math.floor(Math.random() * (10 - 1) + 1);
                var sueloTrampa = new SueloTrampa(x, y, multiplier);
                sueloTrampa.y = sueloTrampa.y - sueloTrampa.alto/2;
                this.suelosTrampa.push(sueloTrampa);
                this.espacio.agregarEstaticoPisable(sueloTrampa);
                break;
            case "A":
                var agujero = new Agujero(x, y);
                agujero.y = agujero.y - agujero.alto/2;
                this.agujeros.push(agujero);
                this.espacio.agregarEstaticoPisable(agujero);
                break;
            case "D":
                this.generarSuelo(x, y);
                var demonio = new Demonio(x, y);
                demonio.y = demonio.y - demonio.alto/2;
                this.enemigos.push(demonio);
                this.espacio.agregarDinamico(demonio);
                break;
            case "O":
                this.generarSuelo(x, y);
                var ogro = new Ogro(x, y);
                ogro.y = ogro.y - ogro.alto/2;
                this.enemigos.push(ogro);
                this.espacio.agregarDinamico(ogro);
                break;
            case "N":
                this.generarSuelo(x, y);
                var nigromante = new Nigromante(x, y);
                nigromante.y = nigromante.y - nigromante.alto/2;
                this.enemigos.push(nigromante);
                this.espacio.agregarDinamico(nigromante);
                break;
            case "M":
                this.generarSuelo(x, y);
                var monstruo = new MonstruoDelPantano(x, y);
                monstruo.y = monstruo.y - monstruo.alto/2;
                this.enemigos.push(monstruo);
                this.espacio.agregarDinamico(monstruo);
                break;
            case "Z":
                this.generarSuelo(x, y);
                var zombie = new Zombie(x, y);
                zombie.y = zombie.y - zombie.alto/2;
                this.enemigos.push(zombie);
                this.espacio.agregarDinamico(zombie);
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
        this.espacio.agregarEstaticoPisable(suelo);
    }

    procesarControles( ){
        //Disparo
        if (controles.disparo) {
            var disparo = this.jugador.disparar();
            if (disparo != null) {
                this.disparosJugador.push(disparo);
                this.espacio.agregarDinamico(disparo);
            }
        }

        //Golpe
        if (controles.golpe) {
            this.espada.atacar();
        }

        //Fuente
        if (controles.fuente) {
            if ((this.fuente.hit == true) && (this.fuente.estado == estadosTrampa.activa)) {
                //CAMBIAR SALA
                this.iniciar();
            }
        }

        // Eje X
        if ( controles.moverX > 0 ){
            this.jugador.moverX(1);
            this.jugador.orientacion = orientaciones.derecha;
            this.espada.moverX(1);
            this.espada.orientacion = orientaciones.derecha;
        }else if ( controles.moverX < 0){
            this.jugador.moverX(-1);
            this.jugador.orientacion = orientaciones.izquierda;
            this.espada.moverX(-1);
            this.espada.orientacion = orientaciones.izquierda;
        } else {
            this.jugador.moverX(0);
            this.espada.moverX(0);
        }

        // Eje Y
        if ( controles.moverY > 0 ){
            this.jugador.moverY(-1);
            this.espada.moverY(-1);

        } else if ( controles.moverY < 0 ){
            this.jugador.moverY(1);
            this.espada.moverY(1);

        } else {
            this.jugador.moverY(0);
            this.espada.moverY(0);
        }

    }


}
