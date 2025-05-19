//1.Calculadora simples
let numero1 = 40;
let numero2 = 30;
let operacao = "+";
let operacao2 = "-";
let operacao3 = "*";
let operacao4 = "/";
let resultado = numero1 + numero2
let resultado2 = numero1 - numero2
let resultado3 = numero1 * numero2
let resultado4 = numero1 / numero2

switch (operacao3) {
    case `+`:
        console.log(`${numero1} + ${numero2}`);
        console.log(`=${resultado}`);
       break;

        case `-`:
            console.log(`${numero1} - ${numero2}`);
            console.log(`=${resultado2}`);  
     break;
    
    case `*`:
        console.log(`${numero1} * ${numero2}`);
        console.log(`=${resultado3}`);
    break;

        case `/`:
        console.log(`${numero1} / ${numero2}`);
        console.log(`=${resultado4}`);
        if (numero2===0) {
           console.log("Operação Inexistente");
        }
    
        break;

    default:
    console.log("Operação inválida")
        break;
};

console.log("-----------------------------------------------------------------------------------------");


//2.Verificar se número é positivo, negativo ou zero
let num = -12;
if (num > 0) {
   console.log("O Número é positivo!");
} else if (num < 0) {
    console.log("O Número é negativo!");
} else {
    console.log("O Número é Zero!");
};

console.log("-----------------------------------------------------------------------------------------");

//3. Verificar se pode votar
let idade = 72;
if (idade >= 16) {
    console.log("Você pode votar");
} else {
    console.log("Você não pode votar, idade abaixo do necessário");
};

console.log("-----------------------------------------------------------------------------------------");

//4.Verificar duas condições com && e ||
let a = 12;
 let b = 3;
 if (a > 10 && b > 10) {
    console.log("Os dois números são maiores que 10");
} else {
    console.log("Um dos números ou os dois números são menores que 10");   
};

if (a < 5 || b < 5){
    console.log("Um dos números é menor 5");
} else {
    console.log("Um é maior que 10 e outro menor que 5");
    
};

console.log("-----------------------------------------------------------------------------------------");

//5.Mostrar números de 1 a 10
for (let i = 1; i <=10; i++) 
console.log(i);

console.log("-----------------------------------------------------------------------------------------");

//6.Somar os números de 1 a 5
let soma = 0;
let i
for (let i= 1; i<=5; i++) {
    soma +=i
}; 
console.log(`O valor da soma é ${soma}`);

console.log("-----------------------------------------------------------------------------------------");

//7.Mostrar números pares de 0 a 20
for (let i = 1; i <=20; i++) {
    if (i % 2 === 0) {
   console.log(i);
 };
};

console.log("-----------------------------------------------------------------------------------------");

//Tabuada de 8






