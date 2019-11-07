function limpiarErrores() {
  var errores = document.getElementsByClassName("error");
  for (var i = 0; i < errores.length; i++) {
    errores[i].innerHTML = "";
  }
}

function validar(formulario) {

  limpiarErrores();

  // Valida el nombre.
  if (formulario.nombre.value.trim().length == 0) {
    document.getElementById("errorNombre").innerText = "Campo obligatorio.";
    formulario.nombre.focus();
    return false;
  }

  if (formulario.nombre.value.length <= 2) {
    document.getElementById("errorNombre").innerText =
      "Debe tener al menos 3 caracteres.";
    formulario.nombre.focus();
    return false;
  }

  // Valida email.
  var rev = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!rev.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Campo inválido";
    formulario.email.focus();
    return false;
  }

  // Valida contraseña.
  if (formulario.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = "Campo obligatorio.";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.contrasena.value.length <= 5) {
    document.getElementById("errorContrasena").innerText =
      "Debe tener mas de 5 caracteres.";
    formulario.contrasena.focus();
    return false;
  }

  // Valida confirmacion de contrasena.
  if (formulario.confirmacion.value != formulario.contrasena.value) {
    document.getElementById("errorContrasenaConfirmacion").innerText = "Debe ser igual a la contraseña.";
    formulario.confirmacion.focus();
    return false;
  }

  // Valida genero.
  if (formulario.genero.value == "") {
    document.getElementById("errorGenero").innerText = "Campo obligatorio.";
    return false;
  }

  // Valida pais.
  if (formulario.pais.value == "") {
    document.getElementById("errorPais").innerText = "Campo obligatorio.";
    formulario.pais.focus();
    return false;
  }

  // Valida terminos y condiciones.
  if (!formulario.terminos.checked) {
    document.getElementById("errorTerminos").innerText = "Campo obligatorio.";
    formulario.terminos.focus();
    return false;
  }

  alert("Datos enviados");

  return true;
}
