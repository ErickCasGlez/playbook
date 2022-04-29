//Se va a crear una clase
class Logger {
    constructor(name) {
        this.name = name
    }

    //Método
    //This se refiere a la variable dentro del bloque
    info (message) {
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`);
    }

    verbose (message){
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${this.name}`);
    }
}

module.exports = Logger