class Logger {
    constructor(name){
        this.count = 0
        this.name = name
    }

    log(message) {
        this.count++
        console.log('[' + this.name + ']' + message)
    }
}

module.exports = new Logger('DEFAULT') //Aquí se declara un nuevo objeto para que cuando se use la clase se cree por default un nuevo objeto y sólo se pasen los parámetros