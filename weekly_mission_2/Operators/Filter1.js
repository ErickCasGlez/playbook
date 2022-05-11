const Paises = [
    'México','Belice','Chile','Brazil','Portugal','Canadá'
]
const encuentraE = Paises.filter(function name(names) {
    return names.includes('e')
})

console.log(encuentraE);

const terminaL = Paises.filter(function name(names) {
    return names.endsWith('l')
})

console.log(terminaL);
