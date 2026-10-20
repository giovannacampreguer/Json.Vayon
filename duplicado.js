
const duplicados = require('./ativ-dois.json');

const resultado = duplicados.filter(cotacao => {
    const locais = cotacao.itens.map(item =>
        JSON.stringify(item.localRisco)
    );

    return locais.some((local, index) =>
        locais.indexOf(local) !== index
    );
});

console.log(resultado.map(cotacao => cotacao.n_cotacao));
