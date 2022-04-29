//Creación de un objeto
let myCar = new Object(); 

//Atributos del objeto que creamos
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1950;

//Impresión del objeto
console.log(myCar)

//Declaración de un objeto con varuables locales y públicas
const myModule = (() => {

    //Varibale de contexto local
    const privateFoo = "Hola, soy privado, sólo me usan dentro de este objeto"
    const privateBar = [1,2,3,4,5]
    const baz = "Soy un valor que va a ser expuesto"

    //Variable para guardar las variables locales
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
        publicBaz: baz
    }

    return exported
})()

console.log(myModule)