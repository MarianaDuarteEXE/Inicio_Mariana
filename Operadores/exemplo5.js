const produto = "Notebook" ;
const preco = 3500.00 ;

//Concatenando

resumo = "O valor do " + produto + " é R$ " + preco

//Interpolação de Texto (String) com crase

resumo = `O valor do ${produto} é R$ ${preco.toFixed(2)}`

console.log (resumo)