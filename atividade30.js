//1.Cálculo do Troco
let = "compra";
let = "pagamento";
let = "troco";
compra = 100;
pagamento = 200;
troco = pagamento - compra;
console.log(`O troco será de R$ ${troco}.`);

//2.Conversão de Temperatura
let = "celsius";
let = "fahrenheit";
let = "conversão";
celsius = 10;
conversão = (celsius * 1.8 + 32);
console.log(`A temperatura ${celsius}°C em fahrenheit é ${conversão}°F.`);

//3.Verificação de Ano Bissexto
let = "ano";
let = "verificação";
let = "divisão";
ano = 2025;
divisão = ano / 4;
if (Number.isInteger(divisão)) {console.log(`O ano de ${ano} é bissexto`);
  
} else {console.log(`O ano de ${ano} não é bissexto`);
}

//4.Calcular Média Escolar e Situação do Aluno
let = "nota1";
let = "nota2";
let = "nota3";
let = "nota4";
let = "total";
let = "Média";
nota1 = 10;
nota2 = 7;
nota3 = 8;
nota4 = 8;
total = nota1 + nota2 + nota3 + nota4;
Média = total /4;

if (Média >=7) {console.log(`O aluno conseguiu a nota ${Média} e está aprovado`);

    
} else {console.log(`O aluno conseguiu a nota ${Média} e está reprovado`);
}

//5.Conversão de Minutos para Horas e Minutos
let = "minutos";
let = "converter";
minutos = 120;
converter = minutos / 60;
console.log(`${minutos} minutos são ${converter} horas.`);


//15.Contagem de Números Ímpares
let = "number";
let = "number2";
let = "number3";
let = "number4";

let number = 2;
if (number % 2=== 0) {console.log(`O número ${number} é par`);

    
} else {console.log(`O número ${number} é ímpar`);
}

let number2 = 3;
if (number2 % 2=== 0) {console.log(`O número ${number2} é par`);

    
} else {console.log(`O número ${number2} é ímpar`);

}

let number3 = 9;
if (number3 % 2=== 0) {console.log(`O número ${number3} é par`);

    
} else {console.log(`O número ${number3} é ímpar`);
}

let number4 = 10;
if (number4 % 2=== 0) {console.log(`O número ${number4} é par`);

    
} else {console.log(`O número ${number4} é ímpar`);
}

//16. Comparação de Preços por Unidade
let precoProdutoA = 5.00;
let quantidadeProdutoA = 500;

let precoProdutoB = 4.50;
let quantidadeProdutoB = 400;

let precoPorUnidadeA = precoProdutoA / quantidadeProdutoA;
let precoPorUnidadeB = precoProdutoB / quantidadeProdutoB;
console.log("Preço por grama do Produto A: R$ " + precoPorUnidadeA);
console.log("Preço por grama do Produto B: R$ " + precoPorUnidadeB);

if (precoPorUnidadeA < precoPorUnidadeB) {console.log("O produto A tem melhor custo-beneficio");

    
} else if (precoPorUnidadeA > precoPorUnidadeB) {console.log("O produto B tem melhor custo-beneficio");

    
} else (console.log("Os dois produtos tem o mesmo custo-beneficio")
);

//17. Cálculo do Perímetro de um Retângulo
let = "lado";
let = "lado2";
let = "lado3";
let = "lado4";
lado = 40;
lado2 = 40;
lado3 = 70;
lado4 = 70;
perimetro = (lado + lado2 + lado3 + lado4);
console.log(`O perímetro do retâgulo é ${perimetro}`);

//18. Cálculo do Tempo Estimado de Viagem
let = "distancia";
let = "velocidade";
let = "tempo";
distancia = 630;
velociadade = 90;
tempo = distancia / velociadade;
console.log(`O tempo estimado de viagem é ${tempo} horas`);

//20.Conversão de Notas para Conceitos
let nota = 10;
if (nota <2) 
    console.log("VOCÊ FICOU COM NOTA F");
else if (nota <4) 
    console.log("VOCÊ FICOU COM NOTA E");
else if (nota <6) 
    console.log("VOCÊ FICOU COM NOTA D");
else if (nota <8) 
    console.log("VOCÊ FICOU COM NOTA C");
else if (nota <9) 
    console.log("VOCÊ FICOU COm NOTA B");
else console.log("VOCÊ FICOU COM NOTA A");

//21. Cálculo de Fatorial
let numero = 5;
let fatorial = 1;

fatorial *= numero;

fatorial *= numero - 1;
fatorial *= numero - 2;
fatorial *= numero - 3;
fatorial *= numero - 4;
console.log(`O fatorial de ${numero} é ${fatorial}`);

//22. Separação de Pares e Ímpares
let numparImpar = 3;
divisao = numparImpar %2;
if (divisao % 2===0) {console.log("O número é par");

    
} else {console.log("O número é ímpar");

    }

    //23.Soma de Dígitos de um Número
    let = "numeroInteiro";
    let = "somaDosNumeros";
    numeroInteiro = "5,8,2";
    somaDosNumeros = 5 + 8 + 2;
    console.log(`A soma dos digitos do número 582 é ${somaDosNumeros}`);

    //25. Cálculo da Média Ponderada
    let nota5 = 10;
    let nota6 = 4;
    let pesoNota1 = nota5 *2;
    let pesoNota2 = nota6 *1;
    let mediaPonderada = (pesoNota1 + pesoNota2) / 3;
   console.log(`Sua Média Ponderada é ${mediaPonderada}`);

   //26.Cálculo de Horas Trabalhadas
   let horarioDeEntrada = 12;
   let horarioDeSaida = 24;
   totalDeHoras = horarioDeSaida - horarioDeEntrada;
   console.log(`Você trabalhou ${totalDeHoras} horas hoje`);

   //27. Divisão de Conta de Restaurante
   totalDeParticipantes = 4;
   totalDaConta = 1000;
   valorPago = totalDaConta / 4;
   console.log(`Cada participante pagará R$ ${valorPago}`);

   //28.Conversão de Moeda
  let Dolar = 5.77;
  let Real = 200;
  let conversao = Real / Dolar;
  console.log(`R$${Real} equivale á $${conversao}`);
  

   
   


   


    
    

