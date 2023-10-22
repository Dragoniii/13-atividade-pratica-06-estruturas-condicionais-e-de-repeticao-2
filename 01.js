//1. Crie uma variável para ler a idade de um motorista. Caso o motorista tenha idade maior ou igual a 18 anos imprime no console “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

const permitido = "A pessoa tem 18 anos ou mais, pode dirigir."
const naoPermitido = "A pessoa tem menos de 18 anos, não pode dirigir."
const idade = Math.round(Math.random()*100);
const resultado = (idade >= 18) ? permitido : naoPermitido;
console.log(idade);
console.log(resultado);

