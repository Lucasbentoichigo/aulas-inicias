let idade = 14 ;
let temCarteirinha = true;
let acompanhadoPorAdulto = false;

if (idade>=18) {
 console.log("Entrada permitida! valor:R$50,00");
    
} else if (idade>=15) {
    if (temCarteirinha) {
    console.log("Entrada permitida com desconto! valor:R$25,00");
        
    }else {console.log("Entrada permitida! valor:R$35,00");
    }
    
} else if (acompanhadoPorAdulto) {console.log("Entrada permitida somente com acompanhante! valor: R$20,00");
  
}else {console.log("Entrada não permitida para menores de 15 anos desacompanhados.");
};