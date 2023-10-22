//15. Crie um algoritmo que armazene três valores, para cada um dos lados de um triângulo: A, B e C. Verifique se os lados fornecidos formam realmente um triângulo. Se formar, deve mostrar no console o tipo de triângulo: isósceles, escaleno ou equilátero. 
//a. Para verificar se os lados fornecidos formam um triângulo: A < B + C e B < A + C e C < A + B. 
//b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B=C); 
//c. Triângulo escaleno: possui todos os lados diferentes (A<>B e B<>C e A<>C); d. Triângulo equilátero: possui todos os lados iguais (A=B e B=C);


const ladoA = Math.floor(Math.random() * 100) + 1;
const ladoB = Math.floor(Math.random() * 100) + 1;
const ladoC = Math.floor(Math.random() * 100) + 1;
const eTriangulo = (ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB);
const eEquilatero = eTriangulo && (ladoA === ladoB) && (ladoB === ladoC);
const eIsoceles = eTriangulo && !eEquilatero && ((ladoA === ladoB) || (ladoB === ladoC) || (ladoA === ladoC));
const eEscaleno = eTriangulo && !eEquilatero && !eIsoceles;
const eRetangulo = eTriangulo && (
    (Math.pow(ladoA, 2) === Math.pow(ladoB, 2) + Math.pow(ladoC, 2)) ||
    (Math.pow(ladoB, 2) === Math.pow(ladoA, 2) + Math.pow(ladoC, 2)) ||
    (Math.pow(ladoC, 2) === Math.pow(ladoA, 2) + Math.pow(ladoB, 2))
);


const resultado = {ladoA, ladoB, ladoC, eTriangulo, eEquilatero, eIsoceles, eEscaleno, eRetangulo}
console.log(resultado);