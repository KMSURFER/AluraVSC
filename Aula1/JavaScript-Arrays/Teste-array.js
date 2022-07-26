// Qual a seguencia que saira no console.

// jantarDeHoje = ['🍔hamburguer', '🌭hotdog', '🍕pizza']

// jantarDeHoje.pop()
// jantarDeHoje.pop()

// jantarDeHoje.push('🍳ovo')
// jantarDeHoje.push('🥗salada')
// jantarDeHoje.push('🍏maçã')

// console.log(jantarDeHoje)

// animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

// animaisDoAquario.splice(1,0,'🐠')
// animaisDoAquario.splice(3,2,'🐟')

// console.log(animaisDoAquario)

// idades = [30, 35, 28]
// nomes = ["Ana", "Juliana", "Leonardo"]
// faculdade = [false, true, true]

// funcionarios = [nomes,idades,faculdade]

// const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// const arrayConcat = arrayOriginal.concat("André", "Fernanda")

// console.log(arrayOriginal)
// console.log(arrayConcat)

// const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

// console.log(arrayConcat)
// console.log(arrayOriginal)

// const arrayOriginal = [50, 60, 70]
// const arrayConcat = arrayOriginal.concat([80, [90, 100]])

// console.log(arrayConcat)
// console.log(arrayOriginal)

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

media = media/notasGerais.length

console.log(media)

