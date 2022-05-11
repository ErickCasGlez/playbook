const Param = {
    equipo: "computadora",
    computadora: function(specs) {
        console.log(`Hola, estás en una ${this.equipo} con ${specs}`);
    }
}

Param.computadora("Procesador")