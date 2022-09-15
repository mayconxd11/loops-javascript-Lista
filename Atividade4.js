
//pesquisa idade, sexo(1 -f , 2-f, 3-o)
// opção (1 -calma,2-nervosa,3-agressivo )
//150 pessoas / 3
//while
//calcular qtd calmas, qtd mukheres nervosas, homens agressivos,

const promp = require ('prompt-sync')();

let i = 0;
let calmas = 0;
let mulheresNervosas = 0;
let homensAgressivos = 0;
let calmos = 0;
let nervosos40 = 0;
let calmos18 = 0;

while (i< 3){
    const idadeText = promp ('Digite sua idade');
    const idade = Number (idadeText);
    console.log ('Escolha o sexo entre:\n\n');
    console.log('1 - Homem\n');
    console.log('2 - Mulher\n');
    console.log('3 - Outros\n');
    const sexoText = promp ('escolha aopção do sexo:');
    const sexo = Number (sexoText);
    console.log ('escolha um gumor entre: \n\n);');
    console.log ('1 - Calmo\n');
    console.log ('2 - Nervoso\n');
    console.log ('3 - Agressivo\n');
    const humorText = prompt ('escolha a opção');
    const humor = Number (humorText);

    if (humor = 1){
        calmas++;
    }
    if (sexo = 2 && humor == 2){
        mulheresNervosas++;
    }
    if (sexo = 1 && humor ==3){
        homensAgressivos++;
    }
    if (sexo = 1 && humor == 1){
        calmos++;
    }
    if (humor = 2 && idade >40){
        nervosos40++;
    }
    if (humor = 1 && idade <18){
        calmos18++;
    }

    i++;
}

console.log(`\no total de pessoas calmas é ${calmas}`);
console.log(`\nO total de mulheres nervosas é de: ${mulheresNervosas}`);
console.log(`\nO total de homens agressivos é de :${homensAgressivos}`);
console.log(`\nO total de outros calmos é ${calmos}`);
console.log(`\nO total de pessoas nervosas com 40 é de:${nervosos40}`);
console.log(`\nO total de calmos com até 18 anos é de ${calmos18}`);