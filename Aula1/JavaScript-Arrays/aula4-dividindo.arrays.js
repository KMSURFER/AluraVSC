// Aula 4 dividindo arrays 
// com a função .slice 

// lembrando que o numero de elementos dentro dos parenteses se inicia no 0 
               // 0        1        2       3        4         5          6           7         8         9        10       11      12       13       14           15         16      17        18        19               
const nomes = ['Joào', 'Juliana' , 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Deisy', 'Camilo']

// console que verifica o tamanha da array (LISTA) quantos nomes temos.
console.log("Quantidade de nomes na lista são: ", nomes.length)

//parametros informados na função 
                        //0     //10  (ou seja metade da lista (/2))  
const sala1 = nomes.slice(0,nomes.length/2)
                              //10    (a outra metade até o fianl da array (lista))
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)