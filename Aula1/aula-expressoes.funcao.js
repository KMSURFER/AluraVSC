// DECLARACAO DE FUNCAO 

function minhaFuncao(param) {
    //bloco de codigo
}

//minhaFuncao("param")

// EXPRESSAO DE FUNCAO 

//const soma = function(num1, num2) {return num1 + num2}
//console.log(soma(1, 1))

// DIFERENCA PRINCIPAL : HOISTING 
// funcoes e var sao "listadas" no topo do arquivo.

console.log(apresentar())

function apresentar() {
    return "ola";
}

console.log (soma(1,1))
const soma = function(num1, num2) {return num1 + num2}

