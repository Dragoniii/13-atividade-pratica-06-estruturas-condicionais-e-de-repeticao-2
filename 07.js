//7. Utilizando do...while, imprima na tela a soma de todos os números entre 10 e 100.

const array = [];
let i = 10;

do {
    array.push(i)
    i++;
} while (i <= 100);

console.log(array);
console.log('---');
const soma = array.reduce((acc, curr) => acc + curr, 0);
console.log(soma);