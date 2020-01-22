function limpiarErrores() {
  var errores = document.getElementsByClassName("error");
  for (var i = 0; i < errores.length; i++) {
    errores[i].innerHTML = "";
  }
}

function validar(formulario) {
  limpiarErrores();

  // Valida email.
  if (formulario.email.value.trim().length == 0) {
    document.getElementById("errorEmail").innerText =
      " Campo obligatorio.";
    formulario.contrasena.focus();
    return false;
  }

  var rev = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!rev.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = " Email inválido.";
    formulario.email.focus();
    return false;
  }

  // Valida contraseña.
  if (formulario.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText =
      " Campo obligatorio.";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.contrasena.value.length <= 7) {
    document.getElementById("errorContrasena").innerText =
      " Contraseña inválida, minimo 8 caracteres.";
    formulario.contrasena.focus();
    return false;
  }

  // Valida confirmacion de contrasena.
  if (formulario.contrasenaConfirmacion.value != formulario.contrasena.value) {
    document.getElementById("errorContrasenaConfirmacion").innerText =
      " Confirmación no coincide con la contraseña.";
    formulario.contrasenaConfirmacion.focus();
    return false;
  }

  // Valida genero musical favorito.
  if (formulario.generoMusicalFav.value == "") {
    document.getElementById("errorGeneroMusicalFav").innerText =
      " Debe seleccionar un genero.";
    return false;
  }

  // Valida edad.
  if (formulario.edad.value == "") {
    document.getElementById("errorEdad").innerText =
      " Debe seleccionar un rango de edad.";
    return false;
  }

  // Valida terminos y condiciones.
  if (!formulario.terminosYCondiciones.checked) {
    document.getElementById("errorTerminosYCondiciones").innerText =
      " Debe aceptar los terminos.";
    formulario.terminosYCondiciones.focus();
    return false;
  }

  alert("Registro exitoso!");

  return true;
}
