  if (formulario.contrasena.value != formulario.confirmacion.value) {
    document.getElementById("errorConfirmacion").innerHTML = "No coincide con contraseña";
    errores = true;
  }