const rls = require("readline-sync")
let num1 = 0
let num2 = 0

function leitura() {
    num1 = rls.questionFloat("Digite o primeiro numero: ")
    num2 = rls.questionFloat("Digite o segundo numero: ")
}

function soma (num1, num2) {
    return (num1 + num2)
}

function principal () {
    leitura ()
    let resposta = soma (num1,num2)

    console.log (`O resultado da soma é: ${resposta}`)
}

principal ()
