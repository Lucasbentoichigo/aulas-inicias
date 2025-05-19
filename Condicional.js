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
let temperatura = 20;
let ocasiao = "casual";
let preferenciaColorida = true;
let prefereEstampa = false;
let orcamento = 100;

if (temperatura > 20) {
    console.log("Está calor! utilize roupas mais leves");
} else {
    console.log("Hoje está mais friozinho, Utilize roupas quentinhas!")
};

if (ocasiao === "casual") {
    console.log("Recomendaçoēs de roupas confortavéis ");
} else if (ocasiao === "formal") {
    console.log("Recomendaçoēs de roupas elegantes");
} else {
    console.log("Recomendaçoēs de roupas mais chamativas ou brilhantes");
}

if (preferenciaColorida) {
    console.log("Recomendaçoēs de roupas com cores vibrantes:vermelho, azul, amarelo e muitas outras!");
} else {
    console.log("Recomendaçoēs de roupas com cores simples como preto, branco ou cinza!");
};

if (prefereEstampa) {
    console.log("Recomendaçoēs de roupas com estampas lindas!");
} else {
    console.log("Recomendaçoēs de roupas sem estampas");
};

if (orcamento < 50) {
    console.log("Procure promoções em lojas populares");
} else if (orcamento < 150) {
    console.log("Você pode comprar as peças em lojas de departamento");
} else {
    console.log("Invista em peças de qualidade em lojas especializadas");
};

console.log("-------------------------------------------------------------------------------------------------------");

//7.
let valorJogo = 150;
let diasCombinados = 7;
let diasAtraso = 3;
let jogoDanificado = false;
let comunicouAtraso = true;

console.log(`Dias combinados: ${diasCombinados}`);
console.log(`Dias de atraso: ${diasAtraso}`);

if (diasAtraso <= 0) {
    console.log("O jogo foi devolvido no prazo combinado!");
} else {
    console.log(`O jogo foi devolvido com ${diasAtraso} dias de atraso`);
    
    let multa = 0;
    let multaPorDia = valorJogo * 0.02;
    
    if (comunicouAtraso) {
        multa = multaPorDia * diasAtraso * 0.5;
        console.log("Multa reduzida por comunicação prévia do atraso");
    } else {
        multa = multaPorDia * diasAtraso;
    }
    
    console.log(`Multa por atraso: R$ ${multa.toFixed(2)}`);
    
    if (jogoDanificado) {
        let multaDanos = valorJogo * 0.3;
        console.log(`Multa por danos ao jogo: R$ ${multaDanos.toFixed(2)}`);
        console.log(`Total a pagar: R$ ${(multa + multaDanos).toFixed(2)}`);
    } else {
        console.log("O jogo foi devolvido em perfeito estado");
    }
};

//8.
let materia1 = "Matemática";
let materia2 = "Física";
let horario1 = "Segunda 14h";
let horario2 = "Quarta 16h";
let nivel = 4;
let sozinho = false;
let explicar = true;

console.log("Perfil do Estudante:");
console.log("Matérias: " + materia1 + " e " + materia2);
console.log("Horários: " + horario1 + " e " + horario2);
console.log("Nível: " + nivel);

let compativel = true;

if (sozinho) {
    compativel = false;
    console.log("Não compatível - prefere estudar sozinho");
};

if (nivel < 3) {
    console.log("Nível abaixo da média do grupo");
};

if (explicar) {
    console.log("Pode ajudar outros alunos");
};

if (compativel) {
    console.log("Compatível com o grupo!");
    console.log("Melhor horário: " + horario2);
} else {
    console.log("Não compatível");
};

console.log("-------------------------------------------------------------------------------------------------------");

//9.
let idade0 = 15;
let media = 7.5;
let temJogo = true;
let temAutorizacao = true;
let temAdvertencias = false;
let qtdAdvertencias = 0;

console.log("Dados do Aluno:");
console.log("Idade: " + idade0 + " anos");
console.log("Média: " + media);
console.log("Tem o jogo: " + (temJogo ? "Sim" : "Não"));
console.log("Autorização: " + (temAutorizacao ? "Sim" : "Não"));
console.log("Advertências: " + (temAdvertencias ? qtdAdvertencias : "Nenhuma"));

let podeParticipar = true;

if (idade0 < 13 || idade0 > 18) {
    podeParticipar = false;
    console.log("Idade fora do permitido (13-18 anos)");
}

if (media < 6.0) {
    podeParticipar = false;
    console.log("Média abaixo do mínimo (6.0)");
}

if (!temJogo) {
    podeParticipar = false;
    console.log("Não possui o jogo necessário");
}

if (!temAutorizacao) {
    podeParticipar = false;
    console.log("Falta autorização dos pais");
}

if (temAdvertencias && qtdAdvertencias > 2) {
    podeParticipar = false;
    console.log("Possui muitas advertências (>2)");
}

if (podeParticipar) {
    console.log("APROVADO para o campeonato!");
} else {
    console.log("REPROVADO para o campeonato");
};

console.log("-------------------------------------------------------------------------------------------------------");

//10.
let tipoExercicio = "corrida";
let duracao = 45;
let frequenciaSemanal = 4;
let atingiuMeta = true;
let compartilhouNasRedes = true;

console.log("Dados do Treino:");
console.log("Tipo: " + tipoExercicio);
console.log("Duração: " + duracao + " minutos");
console.log("Frequência: " + frequenciaSemanal + "semanas");
console.log("Meta: " + (atingiuMeta ? "Atingida" : "Não atingida"));
console.log("Compartilhado: " + (compartilhouNasRedes ? "Sim" : "Não"));

let pontosBase = 0;
let pontosExtra = 0;

if (tipoExercicio === "caminhada") {
    pontosBase = duracao * 1;
} else if (tipoExercicio === "corrida") {
    pontosBase = duracao * 2;
} else if (tipoExercicio === "cicilismo") {
    pontosBase = duracao * 1.5;
};

if (frequenciaSemanal >= 3) {
    pontosExtra += 50;
};

if (atingiuMeta) {
    pontosExtra += 30;
};

if (compartilhouNasRedes) {
    pontosExtra += 20;
};

let pontosTotais = pontosBase + pontosExtra;

console.log("Pontos Base: " + pontosBase);
console.log("Pontos Extra: " + pontosExtra);
console.log("Total de Pontos: " + pontosTotais);

if (pontosTotais >= 200) {
    console.log("Recompensa: Medalha de Ouro + 50% de desconto");
} else if (pontosTotais >= 150) {
    console.log("Recompensa: Medalha de Prata + 30% de desconto");
} else if (pontosTotais >= 100) {
    console.log("Recompensa: Medalha de Bronze + 10% de desconto");
} else {
    console.log("Recompensa: Selo de Participação");
};
