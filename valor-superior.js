//2. Retornar se algum item tem o valor da cobertura básica superior ao valorD
const cotacao = require('./ativ-um.json');

const resultado = cotacao.itens.some(item => {
    return item.coberturas.some(cobertura => 
    cobertura.tipo === 'Básica' && cobertura.valor > item.valorD);
});

console.log(resultado);