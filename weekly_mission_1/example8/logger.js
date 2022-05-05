export default class Logger {
    constructor (name){
        this.name = name
    }
}

los (message) {
    console.log(`[${this.name}] ${message}`);
}