// Aula 6 juntando Arrays (listas)

const salaDePython = [ 'Melissa', 'Helena', 'Rodrigo']

const salaDeJavaScript = [ 'Ju', 'Leo', 'Raquel']

// nessa funcao usaremos o .concat para unir as duas salas lembrando que dentro do paremetro esta a sala que queremos nos unir.
const salasUnificadas = salaDePython.concat(salaDeJavaScript)

console.log(`Então nossa sala junta fica assim : ${salasUnificadas}`)

// resultado no Terminal
// Então nossa sala junta fica assim : Melissa,Helena,Rodrigo,Ju,Leo,Raquel