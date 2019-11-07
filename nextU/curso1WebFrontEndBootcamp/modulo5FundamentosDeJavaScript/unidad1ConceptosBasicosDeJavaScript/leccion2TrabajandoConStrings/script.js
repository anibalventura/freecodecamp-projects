// Función que devuelve el nombre de levento y lugar del mismo.
function encabezadoEvento(evento, lugar) {
    return "Evento: " + evento + ". " + "Lugar: " + lugar + ".";
}

console.log(encabezadoEvento("Intercambio de Libros", "Biblioteca"));
console.log(encabezadoEvento("Lectura de Poemas", "Sala A"));


// Función que devuelve el apellido del participante en mayusculas y luego su nombre en minusculas.
function limpiarNombreParticipante(nombre, apellido) {
    return apellido.trim().toUpperCase() + ", " + nombre.trim().toLowerCase();
}

console.log(limpiarNombreParticipante("    Luis", "Castro   "));
console.log(limpiarNombreParticipante(" ANA", "MENDEZ   "));