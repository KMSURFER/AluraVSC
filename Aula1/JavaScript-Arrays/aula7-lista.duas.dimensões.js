// Aula 7 Lista de duas Dimensões
//      0   //    0         1          2      3 
const alunos = ['João', 'Juliana', 'Caio', 'Ana']
//         1       //     0  1  2  3 
const mediasDosAlunos = [10, 7, 9, 6]

                        // 0 (alunos)   // 1 (mediaDosAlunos)  
let listaDeNotasDeAlunos = [alunos, mediasDosAlunos]

// dentro do parametro puxamos dentro da array "listaDeNotasDeAlunos"a lista "alunos" representada pelo elemento de posição [0] em sua posição na array "listaDeNotasDeAlunos" ,  depois o aluno "João" representado pelo segundo [0] que representa a posição de João na lista "alunos".
// Ja na media puxamos novamente a array "listaDeNotasDeAlunos" onde a lista "mediaDosAlunos" é representada pelo [1] em sua posição na array "listaDeNotasDeAlunos" , onde o [0] representa a posição da media de João na lista mediasDosAlunos.
console.log(`${listaDeNotasDeAlunos[0] [0]}, Sua media é ${listaDeNotasDeAlunos [1] [0]}`)
