  if (formulario.contrasena.value.trim().length < 6) {
    document.getElementById("errorContrasena").innerHTML = "Debe tener al menos 7 caracteres";
    errores = true;
  }