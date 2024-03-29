var teclas = [];

window.addEventListener('keydown', onKeyDown, false);
window.addEventListener('keyup', onKeyUp, false);

function onKeyDown( event) {
    entrada = entradas.teclado;
    // agregar la tecla pulsada si no estaba
    var posicion = teclas.indexOf(event.keyCode);
    if ( posicion == -1 ) {
        teclas.push(event.keyCode);
        switch ( event.keyCode ){
            case 74:
                controles.golpe = true;
                break;
            case 75:
                controles.disparo = true;
                break;
            case 38:
                controles.moverY = 1;
                break;
            case 40:
                controles.moverY = -1;
                break;
            case 39:
                controles.moverX = 1;
                break;
            case 37:
                controles.moverX = -1;
                break;
            case 32:
                controles.fuente = true;
                controles.cofre = true;
                controles.continuar = true;
                break;
        }

    }

}

function onKeyUp( event) {
    // sacar la tecla pulsada
    var posicion = teclas.indexOf(event.keyCode);
    teclas.splice( posicion, 1);

    switch ( event.keyCode ){
        case 74:
            controles.golpe = false;
            break;
        case 75:
            controles.disparo = false;
            break;
        case 38:
            if ( controles.moverY == 1 ){
                controles.moverY = 0;
            }
            break;
        case 40:
            if ( controles.moverY == -1 ){
                controles.moverY = 0;
            }
            break;
        case 39:
            if ( controles.moverX == 1 ){
                controles.moverX = 0;
            }
            break;
        case 37:
            if ( controles.moverX == -1 ){
                controles.moverX = 0;
            }
            break;
        case 32:
            controles.fuente = false;
            controles.cofre = false;
            controles.continuar = false;
            break;
    }
}
