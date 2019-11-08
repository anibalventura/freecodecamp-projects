  if (formulario.nombres.value.trim().length == 0) {
    document.getElementById("errorNombres").innerHTML = "Este campo es obligatorio";
    errores = true;
  }

  if (formulario.email.value.trim().length == 0) {
    document.getElementById("errorEmail").innerHTML = "Este campo es obligatorio";
    errores = true;
  }