const estadosTrampa = {
    activa : 1,
    pasiva : 2,
}

const estadosEnemigo = {
    activo : 3,
    pasivo : 4,
}

const estadosEspada = {
    activa : 1,
    pasiva : 2,
    atacando: 3,
}

const orientaciones = {
    derecha: 5,
    izquierda: 6,
}

let nivel = 0;
let nivelMax = 3;

var pulsaciones = [];

var tipoPulsacion = {};
tipoPulsacion.inicio = 1;
tipoPulsacion.mantener = 2;
