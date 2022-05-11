const scores = [
    {name: 'A', score: 80},
    {name: 'J', score: 63},
    {name: 'U', score: 21},
    {name: 'B', score: 87},
    {name: 'S', score: 90},
    {name: 'T', score: 16},
    {name: 'Y', score: 33}
]
const scoresMayores = scores.filter(function mayores(sco) {
    return sco.score > 80
})

console.log(scoresMayores);