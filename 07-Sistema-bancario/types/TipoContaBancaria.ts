import { Cliente } from "../classes/Cliente"

export type TipoContaBancaria = {
    saldo: number,
    numero: string,
    agencia: string,
    senha: string,
    cliente: Cliente
}