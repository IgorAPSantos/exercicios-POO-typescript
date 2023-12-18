type Produto = {
    descricao: string,
    valor: number,
    quantidade: number
}

class Fatura {
    private cliente: string
    private transacoes: Produto[]

    constructor(cliente: string) {
        this.cliente = cliente
        this.transacoes = []
    }

    registrarProduto(produto: Produto) {
        this.transacoes.push(produto)
    }

    fecharFatura(): string {
        let fatura: string = `Cliente: ${this.cliente} \n\n`
        let total: number = 0

        for (const produto of this.transacoes) {
            const { quantidade, valor, descricao } = produto

            fatura += `${quantidade} - ${descricao} (R$ ${(valor / 100).toFixed(2)}) = R$ ${((quantidade * valor) / 100).toFixed(2)} \n`
            total += ((quantidade * valor))
        }

        fatura += `\n\n Total: R$ ${(total / 100).toFixed(2)}`
        return fatura
    }
}

const faturaIgor = new Fatura('Igor')

faturaIgor.registrarProduto({
    descricao: 'par de tenis',
    valor: 29990,
    quantidade: 1
})
faturaIgor.registrarProduto({
    descricao: 'celular',
    valor: 169990,
    quantidade: 1
})
faturaIgor.registrarProduto({
    descricao: 'chocolate',
    valor: 200,
    quantidade: 3
})

console.log(faturaIgor.fecharFatura());
