window.addEventListener('mousedown', mousedown);
window.addEventListener('mousemove', mousemove);
window.addEventListener('mouseup', mouseup);

function mousedown( event) {
    agregarPulsacion(1, tipoPulsacion.inicio, event);
}

function mousemove (event){
    agregarPulsacion(1, tipoPulsacion.mantener, event);
}

function mouseup(event) {
    eliminarPulsacion(1);
}

function agregarPulsacion(id, tipoPulsacion, event ){
    entrada = entradas.pulsaciones;

    x = event.pageX - canvas.offsetLeft;
    y = event.pageY - canvas.offsetTop;

    var p = {};
    p.x = x;
    p.y = y;
    p.id = id; // Ratón SOLO hay 1
    p.tipo = tipoPulsacion;
    p.timeStamp = event.timeStamp;

    var pulsacionEncontrada = false;
    for(var i=0; i < pulsaciones.length; i++){
        if ( pulsaciones[i].id ==  id){
            pulsaciones[i] = p;
            pulsacionEncontrada = true;
        }
    }

    if ( !pulsacionEncontrada ) {
        pulsaciones.push(p);
    }

}


function eliminarPulsacion(id){
    for(var i=0; i < pulsaciones.length; i++){
        if ( pulsaciones[i].id ==  id){
            pulsaciones.splice( i, 1);
        }
    }
}
