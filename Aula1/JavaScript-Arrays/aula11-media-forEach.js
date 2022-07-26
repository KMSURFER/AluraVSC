const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//  o comando (.forEach) significa "para cada" em portugues funcão CALLBACK => chama de volta 
// notas.forEach( notas => {
//     somaDasNotas += notas
// })

// modo com function 
notas.forEach(function(notas){
  somaDasNotas += notas
})

let media = somaDasNotas/notas.length

console.log(media)