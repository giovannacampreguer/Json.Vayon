const informacoes = require('./ativ-um.json');

const resultado = informacoes.itens.some(item => {
const adicionais = item.coberturas.filter(cobertura => cobertura.tipo === 'Adicional');

const soma = adicionais.reduce((total, cobertura) => {

   return total + cobertura.valor;
    
}, 0);
    return item.valorL <soma; });

    console.log(resultado);