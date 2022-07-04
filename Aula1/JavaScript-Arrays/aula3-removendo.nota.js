// 3 - Deletando elementos na lista 

const notas = [10, 7, 8, 5, 10]
// a função .pop() deleta o ultimo elemento sem necessidade de colocarmos nada entre parenteses.
notas.pop()
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas [3])/ notas.length
// o que esta entre as `` é a frase que saira antes da nota computada.
// simbolizada por ${media} que representa a media das notas.
console.log(`A media é ${media}`)
