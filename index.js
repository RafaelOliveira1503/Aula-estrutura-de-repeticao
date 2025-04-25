
// for (inicializacao; condicao; incremento) {
//     bloco a ser executado
// }

// let js = "javascrip"

// for (let i = 0; i < js.length; i++ ) {
//         console.log(js[i])
// }

// let frutas =['Maçã', 'Banana', 'Uva', 'Melancia']

// let i

// for(i = 3; i >= 0; i-- ) {
//     console.log(frutas[i])
// }

// // Adivinhaçã de 1 valor 

// let pensamento = 7
// let valor

// do {
// let valor = parseInt(prompt('Adivinhe o número que estou pensando'))
// } while (valor != pensamento);


const cor = (prompt('Coloque a cor da etiqueta')).toLowerCase()

do {
  cor
}
while(cor != 'verde' && cor != 'amarelo' && cor != 'azul' && cor != 'vermelho') {
    prompt('Você digitou uma etiqueta inválida, Digite verde, amarelo, azul, vermelho')
}



const preco = Number(prompt('Coloque o preço do produto'))
let desconto

switch (cor) {
    case 'verde':
        desconto = 0.1
        break
    case 'amarelo':
        desconto = 0.2
        break
    case 'azul':
        desconto = 0.3
        break
    case 'vermelho':
        desconto = 0.4
        break
    default:
        alert('Voce digitou uma etiqueta que nao existe')
}

let valorDescontado = preco * (1 - desconto)
valorDescontado = preco - (preco * desconto)

let resposta = alert(`O valor total é ${preco} e com desconto ficou ${valorDescontado}`)