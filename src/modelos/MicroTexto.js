class MicroTexto {

    constructor(valor, x, y) {
        this.valor = valor;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
    }

    dibujar (){
        contexto.font = "8px Arial";
        contexto.fillStyle = "white";
        contexto.textAlign = "center";
        contexto.fillText(this.valor,this.x,this.y);
    }

    desplazar(vxPadre, vyPadre) {
        this.vx = vxPadre;
        this.vy = vyPadre;
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

}