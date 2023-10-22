//14. Leia um número, utilizando WHILE multiplique este número por 3 enquanto a multiplicacao seja menor que 500 e no final mostre qual o último valor

let numero = Math.floor(Math.random() * 99) + 1;
let multiplicacao = numero;
const array = [];
const resultado = {numero, array}

while (multiplicacao <= 1500) {
    array.push(multiplicacao);
    multiplicacao = multiplicacao * 3;
    
    
}

console.log(resultado);
