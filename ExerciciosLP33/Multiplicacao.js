const rls = require("readline-sync")
let num1 = 0
let num2 = 0

function leitura() {
    num1 = rls.questionFloat("Digite o primeiro numero: ")
    num2 = rls.questionFloat("Digite o segundo numero: ")
}

function produto (n1, n2) {
    return (n1 * n2)
}

function principal () {
    leitura ()
    let resposta = produto (num1,num2)

    console.log (`O resultado da multiplicação é: ${resposta}`)
}

principal ()