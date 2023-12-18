import { TipoContaBancaria } from "../types/TipoContaBancaria";
import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
    private taxaDeRendimento: number

    constructor(contaBancaria: TipoContaBancaria) {
        super(contaBancaria)
        this.taxaDeRendimento = 0.05
    }

    depositar(valor: number): string {
        this.saldo += valor + (valor * this.taxaDeRendimento)
        return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`
    }

    sacar(valor: number, senha: string): string {
        if (senha !== this.senha) {
            return `Senha inválida.`
        }
        if (valor > this.saldo) {
            return `Saldo insuficiente.`
        }
        this.saldo -= valor
        return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`
    }
}