function elementoInstruccional(identificador, tipo, version) {
    this.identificador = identificador;
    this.tipo = tipo;
    this.version = version;
}

elementoInstruccional.prototype.imprimirArchivo = function () {
    return `COMP18S_${this.identificador}_${this.tipo}_${this.version}.midoc`;
};

var a1 = new elementoInstruccional("1", "Interactiva", "V01");
var a2 = new elementoInstruccional("2", "Ejercicio", "V02");
var a3 = new elementoInstruccional("3", "Laboratorio", "V01");

console.log(a1.imprimirArchivo());
console.log(a2.imprimirArchivo());
console.log(a3.imprimirArchivo());