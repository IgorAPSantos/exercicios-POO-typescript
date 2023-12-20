import { Carrinho } from "./classes/Carrinho";
import { Produto } from "./classes/Produto";
import { VendaCredito } from "./classes/VendaCredito";
import { VendaDebito } from "./classes/VendaDebito";

const iphone12 = new Produto({
    id: 1,
    descricao: 'Iphone 12',
    categoria: 'Aparelhos Eletrônicos',
    quantidade: 5,
    valor: 250000
})

const motoG = new Produto({
    id: 2,
    descricao: 'Moto G',
    categoria: 'Aparelhos Eletrônicos',
    quantidade: 5,
    valor: 150000
})


// const carrinho = new Carrinho()

// console.log(carrinho.adicionarProduto(motoG))
// console.log(carrinho.adicionarProduto(iphone12))
// console.log(carrinho.imprimirResumo());


// console.log(carrinho.removerProduto(1))
// console.log(carrinho.imprimirResumo());


// console.log(carrinho.alterarQuantidadeProduto(1, 1))
// console.log(carrinho.alterarQuantidadeProduto(2, 1))

// console.log(carrinho.imprimirResumo());


// const vendaCredito = new VendaCredito()

// console.log(vendaCredito.obterValorSemDesconto(carrinho))

// console.log(vendaCredito.finalizarCompra(carrinho, 'sim'))

// const vendaDebito = new VendaDebito()

// console.log(vendaDebito.obterValorSemDesconto(carrinho))

// console.log(vendaDebito.finalizarCompra(carrinho, 'sim'))






