import { Produto, TipoProduto } from './Produto'
export class Carrinho {
    protected produtos: Produto[]

    constructor() {
        this.produtos = []
    }

    imprimirResumo(): Produto[] {
        return this.produtos
    }

    adicionarProduto(produto: Produto): string {
        this.produtos.push(produto)
        return 'Produto adicionado.'

    }

    removerProduto(produtoID: number): string {
        let novoCarrinho = this.produtos.filter(produto => produto.id !== produtoID)
        this.produtos = novoCarrinho
        return 'Produto removido.'
    }

    alterarQuantidadeProduto(produtoID: number, novaQuantidade: number): string {
        const produto = this.produtos.find(produto => produto.id === produtoID)

        if (!produto) {
            return `Produto não encontrado.`
        }

        produto.quantidade = novaQuantidade
        return `Quantidade do produto alterada.`
    }

}