const valores = require('./ativ-um.json');

valores.itens.forEach(item => {
  if (item.valorD > 20000) {
    console.log("Item com valor de dano superior a 20.000:", item);
  }
});