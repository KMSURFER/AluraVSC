// Aula 8 localizando elementos

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 7, 9, 6]

// .includes -> retorna booleano 
// .indexOf -> traz a posição de Ana na array "alunos" que seria "3"
// variavel "INDICE" vai trazer na seguencia guardada dos elementos na lista seu nome e media.
let listaDeNotasDeAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasDeAlunos[0].includes(nomeDoAluno)) {
       let indice = listaDeNotasDeAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasDeAlunos[0][indice]  + ',sua media é ' +  listaDeNotasDeAlunos[1][indice]
    } else {
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota("kle"))


