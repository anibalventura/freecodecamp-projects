var saludoEspanol = "Bienvenido!";
var saludoIngles = "Welcome!";

function colocarSaludo() {
  var saludo;
  if (location.search.includes("lang=en")) {
    saludo = saludoIngles;
  }
  else if (location.search.includes("lang=es")) {
    saludo = saludoEspanol;
  }
  else if (navigator.language == "en") {
    saludo = saludoIngles;
  }
  else {
    saludo = saludoEspanol;
  }
  document.getElementById("saludo").innerText = saludo;
}

colocarSaludo();