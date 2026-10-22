//2. Retorne o número de todas as cotações que tem um valor de premio inferior a R$ 500.000,00
const verificacao = require('./ativ-dois.json');

const cotacoesverificadas = verificacao.filter(cotacao => cotacao.premio < 500000)
.map(cotacao => cotacao.n_cotacao);

console.log(cotacoesverificadas);