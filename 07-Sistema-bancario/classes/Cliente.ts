import { TipoCliente } from "../types/TipoCliente"
import { Endereco } from "../types/Endereco"

export class Cliente {
    nome: string
    email: string
    private cpf: string
    dataCadastro: Date
    private enderecos: Endereco[]

    constructor(
        cliente: TipoCliente
    ) {
        this.nome = cliente.nome
        this.email = cliente.email
        this.cpf = cliente.cpf
        this.dataCadastro = new Date()
        this.enderecos = []
    }

    adicionarEndereco(endereco: Endereco): void {
        this.enderecos.push(endereco)
    }
}