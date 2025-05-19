/*
Exercício 3 - Lista de Compras
Crie um programa que simule uma lista de compras.
1. Crie um array vazio chamado "listaDeCompras"
2. Adicione 5 itens diferentes à lista
3. Remova o primeiro item (definindo-o como undefined)
4. Substitua o item undefined por um novo item
5. Exiba a lista final
*/

let listaDeCompras = [];
listaDeCompras = ["Arroz", "Café", "Feijão", "Sorvete", "Banana"];
console.table(listaDeCompras);
console.log("-----------------------------------------------------------------");

listaDeCompras[0] = "Undefined";
console.log(listaDeCompras[0]);
console.log("-----------------------------------------------------------------");

listaDeCompras[0]= "Sabonete";
console.table(listaDeCompras);
