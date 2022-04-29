//Se crea la variable y se exporta para que otra clase la pueda usar
exports.info = (message) => {
    console.log(`info: ${ message}`)
}

exports.verbose = (message) => {
    console.log(`info: ${message}`)
}