const verificacao = require('./ativ-dois.json');

const cotacoesverificadas = verificacao.filter(cotacao => cotacao.premio < 500000)
.map(cotacao => cotacao.n_cotacao);

console.log(cotacoesverificadas);