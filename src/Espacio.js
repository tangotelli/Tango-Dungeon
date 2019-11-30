class Espacio {

    constructor(gravedad) {
        this.gravedad = gravedad;
        this.dinamicos = [];
        this.estaticosPisables = [];
        this.estaticosNoPisables = [];
    }

    agregarDinamico(modelo){
        this.dinamicos.push(modelo);
    }

    agregarEstaticoPisable(modelo){
        this.estaticosPisables.push(modelo);
    }

    agregarEstaticoNoPisable(modelo){
        this.estaticosNoPisables.push(modelo);
    }

    eliminarDinamico (modelo) {
        for (var i = 0; i < this.dinamicos.length; i++) {
            if (this.dinamicos[i] == modelo) {
                this.dinamicos.splice(i, 1);
            }
        }
    }

    eliminarEstaticoPisable(modelo){
        for (var i = 0; i < this.estaticosPisables.length; i++) {
            if (this.estaticosPisables[i] == modelo) {
                this.estaticosPisables.splice(i, 1);
            }
        }
    }

    eliminarEstaticoNoPisable(modelo){
        for (var i = 0; i < this.estaticosNoPisables.length; i++) {
            if (this.estaticosNoPisables[i] == modelo) {
                this.estaticosNoPisables.splice(i, 1);
            }
        }
    }

    actualizar(){
        for( var i=0; i < this.dinamicos.length; i++){
            //derecha
            this.moverDerecha(i);
            //izquierda
            this.moverIzquierda(i);
            //arriba
            this.moverArriba(i);
            //abajo
            this.moverAbajo(i);
        }

    }

    moverDerecha(i) {
        if ( this.dinamicos[i].vx > 0){
            var movimientoPosible = this.dinamicos[i].vx;
            for(var j=0; j < this.estaticosNoPisables.length; j++){
                var derechaDinamico = this.dinamicos[i].x + this.dinamicos[i].ancho/2;
                var arribaDinamico = this.dinamicos[i].y - this.dinamicos[i].alto/2;
                var abajoDinamico = this.dinamicos[i].y + this.dinamicos[i].alto/2;
                var izquierdaEstatico = this.estaticosNoPisables[j].x - this.estaticosNoPisables[j].ancho/2;
                var arribaEstatico = this.estaticosNoPisables[j].y - this.estaticosNoPisables[j].alto/2;
                var abajoEstatico = this.estaticosNoPisables[j].y + this.estaticosNoPisables[j].alto/2;

                //Estatico no pisable en la trayectoria
                if ((derechaDinamico + this.dinamicos[i].vx) >= izquierdaEstatico
                    && derechaDinamico <= izquierdaEstatico
                    && arribaEstatico < abajoDinamico
                    && abajoEstatico > arribaDinamico) {
                    if (movimientoPosible >= izquierdaEstatico - derechaDinamico){
                        movimientoPosible = izquierdaEstatico - derechaDinamico;
                    }
                }
            }
            //Ya se han comprobado todos los estáticos
            this.dinamicos[i].x = this.dinamicos[i].x + movimientoPosible;
            this.dinamicos[i].vx = movimientoPosible;
        }
    }

    moverIzquierda(i) {
        if ( this.dinamicos[i].vx < 0){
            var movimientoPosible = this.dinamicos[i].vx;
            for(var j=0; j < this.estaticosNoPisables.length; j++){
                var izquierdaDinamico = this.dinamicos[i].x - this.dinamicos[i].ancho/2;
                var arribaDinamico = this.dinamicos[i].y - this.dinamicos[i].alto/2;
                var abajoDinamico = this.dinamicos[i].y + this.dinamicos[i].alto/2;
                var derechaEstatico = this.estaticosNoPisables[j].x + this.estaticosNoPisables[j].ancho/2;
                var arribaEstatico = this.estaticosNoPisables[j].y - this.estaticosNoPisables[j].alto/2;
                var abajoEstatico = this.estaticosNoPisables[j].y + this.estaticosNoPisables[j].alto/2;

                //Estatico no pisable en la trayectoria
                if ( (izquierdaDinamico + this.dinamicos[i].vx) <= derechaEstatico
                    && izquierdaDinamico >= derechaEstatico
                    && arribaEstatico < abajoDinamico
                    && abajoEstatico > arribaDinamico ) {
                    if (movimientoPosible <= derechaEstatico - izquierdaDinamico ) {
                        movimientoPosible = derechaEstatico - izquierdaDinamico;
                    }
                }
            }
            //Ya se han comprobado todos los estáticos
            this.dinamicos[i].x = this.dinamicos[i].x + movimientoPosible;
            this.dinamicos[i].vx = movimientoPosible;
        }
    }

    moverAbajo(i) {
        if ( this.dinamicos[i].vy > 0){
            var movimientoPosible = this.dinamicos[i].vy;
            for(var j=0; j < this.estaticosNoPisables.length; j++){
                var arribaDinamico = this.dinamicos[i].y - this.dinamicos[i].alto/2;
                var abajoDinamico = this.dinamicos[i].y + this.dinamicos[i].alto/2;
                var derechaDinamico = this.dinamicos[i].x + this.dinamicos[i].ancho/2;
                var izquierdaDinamico = this.dinamicos[i].x - this.dinamicos[i].ancho/2;
                var arribaEstatico = this.estaticosNoPisables[j].y - this.estaticosNoPisables[j].alto/2;
                var abajoEstatico = this.estaticosNoPisables[j].y + this.estaticosNoPisables[j].alto/2;
                var derechaEstatico = this.estaticosNoPisables[j].x + this.estaticosNoPisables[j].ancho/2;
                var izquierdaEstatico = this.estaticosNoPisables[j].x - this.estaticosNoPisables[j].ancho/2;

                //Estatico no pisable en la trayectoria
                if ( (abajoDinamico +  this.dinamicos[i].vy) >= arribaEstatico &&
                    arribaDinamico < abajoEstatico
                    && izquierdaDinamico < derechaEstatico
                    && derechaDinamico > izquierdaEstatico ) {
                    if (movimientoPosible >= arribaEstatico - abajoDinamico ) {
                        movimientoPosible = arribaEstatico - abajoDinamico ;
                    }
                }
            }
            //Ya se han comprobado todos los estáticos
            this.dinamicos[i].y = this.dinamicos[i].y + movimientoPosible;
            this.dinamicos[i].vy = movimientoPosible;
        }
    }

    moverArriba(i) {
        if ( this.dinamicos[i].vy < 0){
            var movimientoPosible = this.dinamicos[i].vy;
           for(var j=0; j < this.estaticosNoPisables.length; j++) {
                var arribaDinamico = this.dinamicos[i].y - this.dinamicos[i].alto/2;
                var abajoDinamico = this.dinamicos[i].y + this.dinamicos[i].alto/2;
                var derechaDinamico = this.dinamicos[i].x + this.dinamicos[i].ancho/2;
                var izquierdaDinamico = this.dinamicos[i].x - this.dinamicos[i].ancho/2;
                var arribaEstatico = this.estaticosNoPisables[j].y - this.estaticosNoPisables[j].alto/2;
                var abajoEstatico = this.estaticosNoPisables[j].y + this.estaticosNoPisables[j].alto/2;
                var derechaEstatico = this.estaticosNoPisables[j].x + this.estaticosNoPisables[j].ancho/2;
                var izquierdaEstatico = this.estaticosNoPisables[j].x - this.estaticosNoPisables[j].ancho/2;

                //Estatico no pisable en la trayectoria
                if ( (arribaDinamico +  this.dinamicos[i].vy) <= abajoEstatico &&
                    abajoDinamico > arribaEstatico
                    && izquierdaDinamico < derechaEstatico
                    && derechaDinamico > izquierdaEstatico ) {
                    if (movimientoPosible <= abajoEstatico - arribaDinamico ){
                        movimientoPosible = abajoEstatico - arribaDinamico ;
                    }
                }
            }
            //Ya se han comprobado todos los estáticos
            this.dinamicos[i].y = this.dinamicos[i].y + movimientoPosible;
            this.dinamicos[i].vy = movimientoPosible;
        }
    }
}
