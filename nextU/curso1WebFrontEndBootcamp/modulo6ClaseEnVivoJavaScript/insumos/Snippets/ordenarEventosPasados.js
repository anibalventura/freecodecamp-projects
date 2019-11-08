//Se van a ordenar los eventos del arreglo "pasados"
pasados = pasados.sort(function (x, y) {
    if (x.fecha < y.fecha) {
        return 1;
    }
    return -1;
});