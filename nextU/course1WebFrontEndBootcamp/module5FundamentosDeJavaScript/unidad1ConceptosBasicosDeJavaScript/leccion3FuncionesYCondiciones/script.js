function saludo(nombre, apellido, genero, evento, minutosQueFaltan) {
    var saludo = "";
    var dia = "";


    if (genero == "FEMENINO") {
        saludo = "Bienvenida";
    }
    else {
        saludo = "Bienvenido";
    }

    if (minutosQueFaltan < 60 * 24) {
        dia = "hoy";
    }
    else if (minutosQueFaltan < 60 * 24 * 2) {
        dia = "manana";
    }
    else {
        dia = "pronto";
    }

    return `${saludo} ${nombre.trim().toUpperCase()} ${apellido.trim().toUpperCase()}, recuerda ${dia} el evento (${evento})`;

}

console.log(saludo("    LUIS", "perez", "MASCULINO", "Pelicula", 600));
console.log(saludo("ana ", "peRez", "FEMENINO", "Comidas del Mundo", 1500));
console.log(saludo("  PEDRO ", "Gil", "MASCULINO", "Juego de Baloncesto", 5000));


