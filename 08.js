//8. Crie uma variável para armazenar o salário do usuário e atribua um valor a essa variável. Crie a validação necessária: 
//- Caso o salário seja MENOR que R$ 1.903,98, insira no html "ISENTO DE IR"; 
//- caso contrário insira "TRIBUTADO NO IR".

let salario = (Math.random() * 1167.96 + 1320).toFixed(2);

let ir = (salario > 1903.98) ? "TRIBUTADO NO IR" : "ISENTO DE IR";

console.log(salario);
console.log(ir);