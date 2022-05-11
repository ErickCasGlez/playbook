const Nombres = [
    'Erick','Eva','Eduardo','Pedro',
]

const nomMinus = Nombres.map(function minus(name) {
    return name.toLocaleLowerCase()
})

console.log(nomMinus);