const prompt = require ('prompt-sync')()

let idade = 0
let idade_21 = 0
let idade_50 = 0

while(idade!=-99){
    const idadeText =prompt('Digite sua idade:');
     idade =Number(idadeText);

    if(idade<21){
        idade_21++
    }

    if(idade>50){
        idade_50++
}
}
    console.log (`Total de pessoas com menos de 21 anos: ${idade_21}`);
    console.log (`Total de pessoas com mais de 50 anos: ${idade_50}`);

