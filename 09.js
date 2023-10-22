//9. Informe um valor a uma variável e imprima no console se o número é primo.

let primo = true
let numero = Math.floor(Math.random()*1000 +3) ;

for (let i = 2; i < numero; i++ ){
    if (numero % i === 0){
        primo = false
        break;
    }
}

console.log(numero);
console.log(primo);