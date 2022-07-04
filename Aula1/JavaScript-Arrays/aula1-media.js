//O que é uma Array? => "UMA LISTA COMPOSTA POR "ELEMENTOS" REPRESENTADA POR []."

//MAS O QUE É UM ELEMENTO? => "SÃO NUMEROS OU STRINGS DENTRO DOS COCHETES SEMPRE SEPARADOS POR , ."
// EXEMPLO [1, 2, 3 ] OU STRINGS [BANANA , MAÇA , PERA]

// "VARIAVEL".length => a função .length "TRAZ A LISTA PARA TRABALHARMOS COM AS VARIAVEIS QUE GUARDAMOS."

// 1 - DESAFIO MEDIAS DE NOTA 10,6.5,8,7.5

// let nota1 = 10
// let nota2 = 6.5
// let nota3 = 8
// let nota4 = 7.5

            //  0    1   2   3  "o elemento inicial de uma lista sempre será iniciado por 0" 
 const notas = [10, 6.5, 8, 7.5]

 // jeito de fazer a media para um aluno ja com as notas dadas 
// let media = (nota1 + nota2 + nota3 + nota4)/4

// jeito de fazer a media com lista 
let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media)

