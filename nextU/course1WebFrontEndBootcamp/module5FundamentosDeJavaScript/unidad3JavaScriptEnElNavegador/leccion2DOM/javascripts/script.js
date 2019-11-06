function validar(formulario) {

  if (formulario.nombre.value.trim().length == 0) {
    document.getElementById("errorNombre").innerText = "Campo obligatorio";
    formulario.nombre.focus();
    return false;
  }

  alert("Datos enviados");

  return true;
}
