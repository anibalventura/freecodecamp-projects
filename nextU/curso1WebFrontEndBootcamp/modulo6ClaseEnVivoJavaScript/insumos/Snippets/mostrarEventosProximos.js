//Se recorre el arreglo "proximos" y se agregan los datos al HTML
for (var j = 0; j < proximos.length; j++) {
    html += `<div class="col-md-6">
                <div class="card flex-md-row mb-4  h-md-250">
                  <div class="card-body d-flex flex-column align-items-start">
                    <h3 class="mb-0">
                      <a href="detalle.html?id=${proximos[j].id}">${proximos[j].nombre}</a>
                    </h3>
                    <div class="mb-1 text-muted">${proximos[j].fecha}</div>
                    <p class="card-text mb-auto">${proximos[j].descripcion}
                    </p>
                  </div>
                </div>
              </div>`
}
document.getElementById("proximos").innerHTML = html