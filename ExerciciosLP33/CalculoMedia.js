const rls = require("readline-sync")
let num1 = 0
let num2 = 0

function leitura() {
    num1 = rls.questionFloat("Digite o primeiro numero: ")
    num2 = rls.questionFloat("Digite o segundo numero: ")
}

function soma (n1, n2) {
    return (n1 + n2)
}

function media (n1, n2) {
    return (soma(n1, n2)/2)
}

function principal () {
    leitura ()
    let resposta = media (num1,num2)

    console.log (`A média é: ${resposta}`)
}

principal ()