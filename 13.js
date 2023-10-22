//13. Faça um algoritmo que armazene um número e imprima os números ímpares entre 1 e o número armazenado.

const array = [];
let i = 1;
const numero = Math.floor(Math.random() * 101);
const resultado = {array, numero}

while (i <= numero) {
    array.push(i);
    i += 2
}


console.log(resultado);
