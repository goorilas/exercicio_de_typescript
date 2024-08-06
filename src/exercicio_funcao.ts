//criando a multiplicação de dois numeros.
const primeiro = 85
const segundo = 63
const multiplicacao = (primeiro: number, segundo: number) : number => primeiro * segundo;
const resultado = multiplicacao(primeiro, segundo)
console.log(`O valor dessa muntiplicação é ${resultado}.`)
//---------------------------------------------------------------------------------------------------------
function cumprimentar(nome: string) : string {
    return `Olá ${nome} espero ter acertado dessa vez!! =)`
}
console.log(cumprimentar('Professor'))