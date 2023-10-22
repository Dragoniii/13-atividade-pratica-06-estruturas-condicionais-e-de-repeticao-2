//16. Escreva um algoritmo que armazene o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem no console que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

function calcularIdade(dataNascimento) {
  let hoje = new Date();
  let nascimento = new Date(dataNascimento);

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  let verificarMes = hoje.getMonth() - nascimento.getMonth();

  let diaNascimento = nascimento.getDate();
  let hojeDia = hoje.getDate();

  if (verificarMes < 0 || (verificarMes === 0 && hojeDia < diaNascimento)) {
    idade = idade - 1;
  }

  return idade;
}

let idade = calcularIdade("1992-12-04");
console.log(idade);
