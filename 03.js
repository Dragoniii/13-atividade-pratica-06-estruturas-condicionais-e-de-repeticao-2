//3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um número de 1 a 7 e imprimir no console o dia da Semana. Para este exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim por diante. Caso o número recebido não esteja neste intervalo imprimir “Dia não reconhecido”.

const numero = Math.floor(Math.random() * 7) + 1;
let dia = undefined;

if (numero === 1) {
  dia = "Domingo.";
} else if (numero === 2) {
  dia = "Segunda.";
} else if (numero === 3) {
  dia = "Terça.";
} else if (numero === 4) {
  dia = "Quarta.";
} else if (numero === 5) {
  dia = "Quinta.";
} else if (numero === 6) {
  dia = "Sexta.";
} else if (numero === 7) {
  dia = "Sábado.";
}

console.log(numero);
console.log(dia);


