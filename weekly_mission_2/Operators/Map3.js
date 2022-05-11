const Paises = [
    'España','Francia','Ecuador','Bélgica',
]

const nomMayus = Paises.map(function mayus(name) {
    return name.toLocaleUpperCase()
})

console.log(nomMayus);