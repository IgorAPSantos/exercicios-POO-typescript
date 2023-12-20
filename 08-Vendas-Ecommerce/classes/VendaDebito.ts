import { Carrinho } from "./Carrinho";
import { Venda } from "./Venda";

export class VendaDebito extends Venda {

    constructor() {
        super()
    }

    obterValorSemDesconto(carrinho: Carrinho): string {
        const totalSemDesconto = this.calcularSomaValores(carrinho)
        return `Total sem desconto: R$ ${(totalSemDesconto / 100).toFixed(2)}`
    }

    finalizarCompra(carrinho: Carrinho, desconto: "sim" | "nao"): string {
        const totalSemDesconto = this.calcularSomaValores(carrinho)
        if (desconto === 'sim') {
            let total = totalSemDesconto - (totalSemDesconto * 0.07)
            return `Compra finalizada. Preço: R$ ${(total / 100).toFixed(2)}`

        }
        return `Compra finalizada. Preço: R$ ${(totalSemDesconto / 100).toFixed(2)}`
    }

}