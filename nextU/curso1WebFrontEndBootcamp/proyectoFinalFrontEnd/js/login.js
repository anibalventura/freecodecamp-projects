function limpiarErrores() {
  var errores = document.getElementsByClassName("error");
  for (var i = 0; i < errores.length; i++) {
    errores[i].innerHTML = "";
  }
}

function validar(formulario) {
  limpiarErrores();

  // Valida email.
  var rev = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!rev.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = " Correo invalido.";
    formulario.email.focus();
    return false;
  }

  // Valida contraseña.
  if (formulario.contrasena.value.length <= 8) {
    document.getElementById("errorContrasena").innerText =
      " Debe tener mas de 8 caracteres.";
    formulario.contrasena.focus();
    return false;
  }

  alert("Iniciando sesión... espere un momento.");

  return true;
}