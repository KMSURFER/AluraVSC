// Aula 5 retirando e incluindo elementos as listas 
                     //   0       1      2        3        4         5          
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'] 

// Nesta funçao usamos o .splice para retirar 2 elemntos sendo as posições de ana e caio e acrescentar o Rodrigo.
// Sendo que o "1" é o parametro de retirada e o "2" é a quantidade a partir da posição dada dos elementos para  exclusão e "Rodrigo" o aluno acrescentado.
//listaDeChamada.splice(1, 2, 'Rodrigo')

//neste exemplo a função descreve que na posição "2" ele quer que inclua o "Rodrigo" sem retirar ninguem da lista representado pelo numero "0" 
listaDeChamada.splice(2, 0, 'Rodrigo')

console.log(`Lista de Chamada: ${listaDeChamada}`)
