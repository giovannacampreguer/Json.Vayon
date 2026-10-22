//1. Exibir a soma dos valores de todas as coberturas por item
const valores = require('./ativ-um.json');
valores.itens.forEach(item =>{
  const somaValores = item.coberturas.reduce((total, cobertura) =>{
    return total + cobertura.valor; }, 0);
    
console.log(item.localRisco.endereco, somaValores);
  });