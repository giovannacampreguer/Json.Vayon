const verificacao = require('./ativ-dois.json');

const resultado = verificacao.map(cotacao => {
    let texto = `N Cotacao: ${cotacao.n_cotacao}
Nome Proponente: ${cotacao.proponente.nome}
Itens
`;

    cotacao.itens.forEach(item => {
        let quantidade = item.coberturas.length;
        let total = 0;

        item.coberturas.forEach(cobertura => {
            total += cobertura.valor;
        });

        texto += `Quantidade de coberturas: ${quantidade}
Valor total de coberturas: R$ ${total.toFixed(2)}
`;
    });

    texto += `Valor Premio: R$ ${cotacao.premio.toFixed(2)}`;

    return texto;
});

console.log(resultado.join('\n\n'));
