/*Se va a recorrer el arreglo donde se obtienen los eventos, y los datos se va a dividir
en dos arreglos de eventos pasados y proximos*/
for (var i = 0; i < eventos.length; i++) {
    if (eventos[i].fecha < hoy) {
        pasados.push(eventos[i]);
    } else {
        proximos.push(eventos[i]);
    }
}