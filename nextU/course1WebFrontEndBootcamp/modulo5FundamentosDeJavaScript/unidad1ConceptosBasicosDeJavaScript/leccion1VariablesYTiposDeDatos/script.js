function totalMinutos(horas, minutos) {
    var total = (horas * 60) + minutos;
    return (total);
}

function cantidadRecolectadaSimple(costo, cantidadParticipantes) {
    return (costo * cantidadParticipantes);
}

function cantidadRecolectada(costoEstudiante, costoAdulto, cantidadEstudiantes, cantidadAdultos) {
    var totalEstudiante = costoEstudiante * cantidadEstudiantes;
    var totalAdultos = costoAdulto * cantidadAdultos;
    return (totalEstudiante + totalAdultos);
}

console.log(totalMinutos(5, 25));
console.log(totalMinutos(1, 5));
console.log(totalMinutos(0, 15));

console.log(cantidadRecolectadaSimple(10, 5));
console.log(cantidadRecolectadaSimple(1, 5));

console.log(cantidadRecolectada(1, 5, 20, 4))
console.log(cantidadRecolectada(0, 5, 20, 3))