function evento(id, nombre, cantidadAsistentes, precioPorAsistente) {
    this.id = id;
    this.nombre = nombre;
    this.cantidadAsistentes = cantidadAsistentes;
    this.precioPorAsistente = precioPorAsistente;
}

evento.prototype.enlace = function () {
    return `${this.nombre} ${this.id}`;
};

evento.prototype.dineroTotalRecaudado = function () {
    return this.cantidadAsistentes * this.precioPorAsistente;
};

var evento1 = new evento("1", "e1", 12, 5);

console.log(evento1.enlace());
console.log(evento1.dineroTotalRecaudado());