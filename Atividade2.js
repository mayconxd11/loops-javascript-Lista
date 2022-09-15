const prompt = require ('prompt-sync')()

let impar
let par

for(let i= 0; i< 10; i++){
    numeroText = prompt ('digite o numero')
    numero = Number (numeroText)

    if(numero % 2 ==0){
        par++
    }
    else{
        impar++
    }
}
console.log( `A quantidade de números pares foram: ${par} e  a quantidade de números impares foram: ${impar}`)