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

console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------");


//2.
let idade = 18;
let passouExameTeórico = true;
let passouExamePrático = true;
if (idade>=18) {console.log("Você tem 18 anos, então pode fazer o exame teórico para aprender a dirigir!");

} else {console.log("Você não pode dirigir! ainda é muito novo");
};

if (passouExameTeórico) {console.log("Você passou do exame teórico! agora você pode fazer o exame prático!");

} else {console.log("Que pena! Você não passou do exame teórico, mas você pode tentar novamente!");
};


if (passouExamePrático) {console.log("Você passou do exame prático! agora você pode dirigir! Pegue sua carteira!");

    
} else {console.log("Que pena! você não passou do exame prático, tente refazer!");
};

