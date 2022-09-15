const prompt = require('prompt-sync')()

let m3 = 0;
let multiplo3 = 0;

let numeroText = prompt('Type a number: ');
let numero = Number(numeroText);

do{
    if(numero%3==0){
        m3++;
        multiplo3+=numero;
 }
    numeroText = prompt('Type another number: ');
    numero = Number(numeroText);
}while(numero!=0);

const media = multiplo3/m3;

console.log(`Média dos múltiplos de 3 é igual a: ${Math.round(media)}`)
