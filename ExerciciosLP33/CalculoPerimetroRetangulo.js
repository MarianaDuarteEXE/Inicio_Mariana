const rls = require("readline-sync")
let base = 0
let altura = 0

function leitura() {
    base = rls.questionFloat("Digite quanto mede a base: ")
    altura = rls.questionFloat("Digite quanto mede a altura: ")
}

function dobroBase (base) {
    return (base * 2)
}

function dobroAltura (altura) {
    return (altura * 2)
}

function perimetro (dobroB, dobroA) {
    return (dobroB + dobroA)
}

function principal () {
    leitura ()
    let resultBase = dobroBase (base)
    let resultAlt = dobroAltura (altura)
    let resultPerimetro = perimetro (dobroB, dobroA)

    console.log (`O perímetro do retângulo é: ${resultPerimetro}`)
}

principal ()