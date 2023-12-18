import { TipoContaBancaria } from '../types/TipoContaBancaria'
import { Cliente } from './Cliente'

export abstract class ContaBancaria {
    protected saldo: number
    public numero: string
    public agencia: string
    protected senha: string
    public cliente: Cliente

    constructor(dadosConta: TipoContaBancaria) {
        this.saldo = dadosConta.saldo
        this.numero = dadosConta.numero
        this.agencia = dadosConta.agencia
        this.senha = dadosConta.senha
        this.cliente = dadosConta.cliente
    }

    consultarSaldo(senha: string): string {
        if (senha === this.senha) {
            return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`
        }
        return `Senha inválida`
    }

    abstract depositar(valor: number): string

    abstract sacar(valor: number, senha: string): string
}