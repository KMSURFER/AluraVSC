//              0   1   2   3  => arrays  
const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

                     //4  quantidade de arrays
for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i]; 
}

let media = somaDasNotas/notas.length

console.log(media)