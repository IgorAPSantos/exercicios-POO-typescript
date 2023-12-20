import { Carrinho } from "./Carrinho";
import { Venda } from "./Venda";

export class VendaCredito extends Venda {

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
            if (totalSemDesconto <= 100) {
                return `Para obter desconto no crédito, o valor da compra deve ser acima de R$100,00`
            }
            let total = totalSemDesconto - (totalSemDesconto * 0.05)
            return `Compra finalizada. Preço: R$ ${(total / 100).toFixed(2)}`

        }
        return `Compra finalizada. Preço: R$ ${(totalSemDesconto / 100).toFixed(2)}`
    }

}