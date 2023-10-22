//11. Utilizando Switch, faça um programa que pergunte em que turno você estuda. Peça para digitar “M” para matutino ou “V” para vespertino ou “N” para noturno. Mostre um alerta com a mensagem “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”, conforme o caso.

const turno = Math.floor(Math.random() * 3);
let saudacao = undefined

switch (turno) {
    case 0:
        saudacao = "Bom dia.";
        break;
    case 1:
        saudacao = "Boa tarde.";
        break;
    case 2:
        saudacao = "Boa noite.";
        break;
    default:
        saudacao = "Erro: número inválido.";
}

console.log(turno);
console.log(saudacao);