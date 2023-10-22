//12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um programa que armazene a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&).

const idade = Math.floor(Math.random() * 101);
const resultado1 = (idade >= 18 && idade < 67) ? 'Pode doar sangue.' : 'Não pode doar sangue.';
const resultado2 = (idade < 18 || idade >= 67) ? 'Não pode doar sangue.' : 'Pode doar sangue.';
const resultado = {idade, resultado1, resultado2}


console.log(resultado);
