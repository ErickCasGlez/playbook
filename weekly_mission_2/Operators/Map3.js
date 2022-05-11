const Paises = [
    'España','Francia','Ecuador','Bélgica',
]

const nomMayus = Paises.map(function mayus(name) {
    return name.toLocaleUpperCase().slice(0,3)
})

console.log(nomMayus);