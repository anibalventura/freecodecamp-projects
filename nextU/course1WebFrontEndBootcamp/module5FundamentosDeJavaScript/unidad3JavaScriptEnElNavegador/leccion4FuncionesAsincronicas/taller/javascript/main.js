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
      "Debe ser mayor a 2 caracteres.";
    formulario.nombre.focus();
    return false;
  }

  var rev = /^[A-Za-z.-]+(\s*[A-Za-z.-]+)*$/;
  if (!rev.test(formulario.nombre.value)) {
    document.getElementById("errorNombre").innerText =
      "No debe contener numeros.";
    formulario.nombre.focus();
    return false;
  }

  alert("Datos enviados");

  return true;
}
