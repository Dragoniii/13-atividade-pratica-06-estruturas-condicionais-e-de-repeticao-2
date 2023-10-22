//2. Para o mesmo exercício acima insira mais uma variável a condicional, além de saber se o motorista tem 18 anos ou mais, temos que saber também se ele é habilitado para dirigir. Caso ele tenha idade maior ou igual a 18 anos e possua habilitação, insira no html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

const idade = Math.floor(Math.random() * 101);
const cnh = Math.random() >= 0.5;
const resultado = (idade >= 18 && cnh === true) ? "Pode dirigir." : "Não pode dirigir.";

//const idade = 18
//const cnh = true

console.log(idade);
console.log(cnh);
console.log(resultado);
