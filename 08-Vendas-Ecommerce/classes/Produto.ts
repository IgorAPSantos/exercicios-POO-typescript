export type TipoProduto = {
    id: Readonly<number>
    descricao: string
    categoria: string
    valor: Readonly<number>
    quantidade: number

}

export class Produto {
    public id: Readonly<number>
    public descricao: string
    public categoria: string
    public valor: Readonly<number>
    public quantidade: number

    constructor(produto: TipoProduto) {
        this.id = produto.id
        this.descricao = produto.descricao
        this.categoria = produto.categoria
        this.valor = produto.valor
        this.quantidade = produto.quantidade
    }


}