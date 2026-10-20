const verificacao = require('./ativ-dois.json');

function verificarCPF(cpf, cotacoes) {
    return cotacoes.some(cotacao => cotacao.proponente.cpf === cpf);}

console.log(verificarCPF("987.654.321/99", verificacao));
console.log(verificarCPF("789.123.456/22", verificacao));
console.log(verificarCPF("456.789.123/11", verificacao));
console.log(verificarCPF("111.111.111/11", verificacao));