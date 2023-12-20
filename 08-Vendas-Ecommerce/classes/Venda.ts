import { Carrinho } from "./Carrinho";

export abstract class Venda {
    protected desconto: 'sim' | 'nao' | null

    constructor() {
        this.desconto = null
    }
    protected calcularSomaValores(carrinho: Carrinho): number {
        let soma = 0
        for (const produto of carrinho.imprimirResumo()) {
            soma += produto.valor
        }
        return soma
    }

    abstract finalizarCompra(carrinho: Carrinho, desconto: "sim" | "nao"): string


}

// private opcaoPagamento: 'credito' | 'debito' | null
// private precoFinal: number
// private desconto: 'sim' | 'nao' | null

// constructor() {
//     this.produtos = []
//     this.opcaoPagamento = null
//     this.precoFinal = 0
//     this.desconto = null
// }
// private calcularPrecoFinal(): void {
//     for(const produto of this.produtos) {
//     this.precoFinal += produto.valor
// }
// return
// }