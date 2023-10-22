const precoTabela = (Math.random() * 900 + 100).toFixed(2);
console.log(`Preço: R$ ${precoTabela}`);

const vezes = Math.floor(Math.random() * 15) + 1;
console.log(`Parcelas: ${vezes}`);

let total;
if (vezes === 1) total = precoTabela * 0.975;
else if (vezes <= 5) total = precoTabela;
else if (vezes <= 10) total = precoTabela * 1.06;
else total = precoTabela * 1.13;

console.log(total.toFixed(2));
console.log(total / vezes);
