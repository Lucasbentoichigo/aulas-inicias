//1.
let valorCompra = 250;
let ehDiaPromocao = true;
let temCartaoFidelidade = true;

let percentualDesconto = 0;
if (valorCompra >200) {percentualDesconto +=10;
    console.log("Desconto de 10% aplicado na compra por ser maior de R$200!");
    
} 
if (ehDiaPromocao) {percentualDesconto +=15;
    console.log("Desconto adicional de 15% aplicado na compra por ser dia de promoção!");
    
}
if (temCartaoFidelidade) {percentualDesconto +=5;
    console.log("Desconto adicional de 5% aplicado na compra por ter o Cartão fidelidade da loja!");
    
}
let valorDesconto = valorCompra * (percentualDesconto / 100);
let valorFinal = valorCompra - valorDesconto;
console.log(`Valor original: R$${valorCompra.toFixed(2)}`);
console.log(`Total de desconto: ${percentualDesconto}% (R$${valorDesconto.toFixed(2)})`);
console.log(`Valor final: R$${valorFinal.toFixed(2)}`);

console.log("----------------------------------------------------------------------------------");


//2.
let idade = 16;
let passouExameTeórico = true;
let passouExamePrático = true;
if (idade>=18) {console.log("Você tem 18 anos, então pode fazer o exame teórico para aprender a dirigir!");

} else {console.log("Você não pode dirigir! ainda é muito novo");
};

if (idade < 18) {console.log("Você não tem idade suficiente para dirigir");

} else if (passouExameTeórico) {console.log("Você passou do exame teórico, agora você pode fazer o exame prático");

} else {console.log("Que pena! Você não passou do exame teórico, mas você pode tentar novamente!");
};


if (idade < 18) {console.log("Você não tem idade suficiente para fazer os exames para dirigir");

} else if (passouExamePrático) {console.log("Parábens! você passou do exame prático! agora você conseguiu sua carteira e pode dirigir");
} else 
{console.log("Que pena! você não passou do exame prático, tente refazer!");
};

console.log("---------------------------------------------------------------------------------");

//3.
let idade1 = 20;
let feriado = true;
let temCartaoDesconto = true;
let precoingresso;

if (idade1 <= 10) {
    precoingresso = 20;
    console.log(`Categoria Criança - Preço base:R$20,00`)
} else if (idade1 >= 60) {
    precoingresso = 25;
    console.log(`Categoria Idoso - Preço base: R$25,00`);
}else {
    precoingresso = 40;
    console.log(`Categoria Adulta - Preço base: R$40,00`);
    }
    
    if(feriado){
    let acrescimo = precoingresso *0.2;
    precoingresso += acrescimo;
    console.log(`Acréscimo de 20% por ser feriado: +R$${acrescimo.toFixed(2)}`);    
}

if(temCartaoDesconto){
    let descontoParque = precoingresso*0.15;
    precoingresso -= descontoParque;
    console.log(`Desconto de 15% por ter cartão: -R$${descontoParque.toFixed(2)}`);  
}
console.log(`Preço final do ingresso: R$${precoingresso.toFixed(2)}`);

console.log("------------------------------------------------------------------------------");

//4.
let idade2 = 16;
let classificacaodefilme;
let acompanhadaPorResponsavel = true;
let temIngresso = true;
if (idade2 <=10) {
    classificacaodefilme = "livre para todos os públicos"
    console.log(`Você pode ver esse filme já que o filme é ${classificacaodefilme}`); 
} else if (idade2 < 14) {
    classificacaodefilme = "+12";
    console.log(`Você pode ver esse filme já que você é ${classificacaodefilme}`);
} else if (idade2 < 16) {
    classificacaodefilme = "+14";
    console.log(`Você pode ver esse filme já que você é ${classificacaodefilme}`);
    } else if (idade2 <18){
        classificacaodefilme = "+16";
        console.log(`Você pode ver esse filme já que você é ${classificacaodefilme}`);
        } else {
            classificacaodefilme = "+18";
        console.log(`Você  pode ver esse filme já que você é ${classificacaodefilme}`);
        };
        if (acompanhadaPorResponsavel) {
            console.log("Você pode entrar com seus responsáveis")
        
        } else if( idade2 > 15) {
            console.log("Você pode entrar sozinho")
        
        } else{
            console.log("É preciso entrar com seus responsáveis")
        };
        
        if (temIngresso) {
            console.log("Pode entrar para assistir o filme")
        }else {
            console.log("Compre seu ingresso para assitir o filme")
        };


console.log("----------------------------------------------------------------------------------------");




 //5.
let pontos = 100;
let dificuldade = 3;
let completouEmTempoRecorde = true;
let coletouTodosItens = true;
let multiplicadorDePontos = pontos *dificuldade;
let pontosRecorde = multiplicadorDePontos *2
console.log(`Você completou a fase na dificuldade ${dificuldade} e conseguiu ${multiplicadorDePontos} pontos`);

if (completouEmTempoRecorde) {
    console.log(`Você completou a fase na dificuldade ${dificuldade} em tempo recorde e seus pontos foram dobrados! seus pontos foram de ${pontosRecorde}`);

};

if (coletouTodosItens) {
    let faseCompleta2 = pontosRecorde +150
    console.log(`Você completou a fase na dificuldade ${dificuldade} e coletou todos os itens! seus pontos foram de ${faseCompleta2}`);
    
};

console.log("-------------------------------------------------------------------------------------------------------");


//6.
let temperatura = 30;
let ocasiao = "festa";
let preferenciaColorida = true
let prefereEstampa = true
let orcamento = "R$2000";

if (temperatura =>25) {
    console.log("Hoje o dia está quente, sugerimos essas roupas mais leves para você");
} else if (temperatura < 20) {
    console.log("Hoje o dia está frio, sugerimos essas roupas mais quentes para você");
}







