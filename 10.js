//10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1 para sexo feminino e 2 para sexo masculino) de uma pessoa, construa um programa que calcule e mostre seu peso ideal, utilizando as seguintes fórmulas: 
//- para homens: (72.7 * Altura) – 58 
//- para mulheres: (62.1 * Altura) – 44.7

const altura = (Math.random() * 2 + 0.546).toFixed(2);
const sexo = (Math.random() > 0.5) ? "feminino" : "masculino";
const pesoIdeal = (sexo === "feminino") ? (((62.1 * altura)-44.7)).toFixed(2) : ((72.7 * altura)-58).toFixed(2); 
const pessoa = {altura, sexo, pesoIdeal}

console.log(pessoa);