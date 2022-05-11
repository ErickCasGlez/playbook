
const Numbers = [
    1,2,3,4,5
]
const Result = Numbers.reduce (function reduce(acc, element) {
    return acc + element
})

console.log(Result);