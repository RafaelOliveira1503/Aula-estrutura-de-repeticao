//1 Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%. Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja. Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor inválido e peça novamente a cor da etiqueta.

let cor;
let verifyEtiq = true;
let desconto

while(verifyEtiq) {
  cor = prompt('Digite a cor da etiqueta: verde, amarelo, azul ou vermelho');
  
  switch (cor) {
    case 'verde':
        desconto = 0.1
        verifyEtiq = false;
        break
    case 'amarelo':
        desconto = 0.2
        verifyEtiq = false;
        break
    case 'azul':
        desconto = 0.3
        verifyEtiq = false;
        break
    case 'vermelho':
        desconto = 0.4
        verifyEtiq = false;
        break

    default:
        alert("Opção de cor inválida!, digite novamente!");
}
}


let valor = Number(prompt("Digite o valor do produto!"));



let valorDescontado = valor * (1 - desconto)
valorDescontado = valor - (valor * desconto)

let resposta = alert(`O valor total é ${valor} e com desconto ficou ${valorDescontado}`)