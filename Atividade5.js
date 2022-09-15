const prompt = require ('prompt-sync')()

let ad = 0;
let numeroText = prompt('digite um número: ');
let numero = Number(numeroText);

do{
   ad+=numero;
   numeroText = prompt('Digite qualquer número: ');
   numero = Number(numeroText);
}while(numero!=0);

console.log(`A soma dos números digitados é: ${ad}`)