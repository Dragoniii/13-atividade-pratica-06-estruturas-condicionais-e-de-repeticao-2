//17. Escreva um algoritmo que armazene o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. O algoritmo deve fazer uma validação para que as porcentagens dos votos armazenados (brancos, nulos e válidos) respeitem o limite do número total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e válidos não seja maior que o número total de eleitores.

const brancos = Math.floor(Math.random() * 1000) + 1;
const nulos = Math.floor(Math.random() * 1000) + 1;
const validos = Math.floor(Math.random() * 1000) + 1;
const totalVotos = brancos + nulos + validos
const brancosPercentual = (brancos/totalVotos) * 100
const nulosPercentual = (nulos/totalVotos) * 100
const validosPercentual = (validos/totalVotos) * 100
const candiddatoA = Math.floor(Math.random()*validos);
const candiddatoB = validos - candiddatoA;
const vencedor = (candiddatoA > candiddatoB) ? "A venceu." : "B venceu.";

const resultado = {brancos, nulos, validos, totalVotos, brancosPercentual, nulosPercentual, validosPercentual, candiddatoA, candiddatoB, vencedor}
console.log(resultado);