const cotacao = require('./ativ-um.json');

const resultado = cotacao.itens.some(item => {
    return item.coberturas.some(cobertura => 
    cobertura.tipo === 'Básica' && cobertura.valor > item.valorD);
});

console.log(resultado);