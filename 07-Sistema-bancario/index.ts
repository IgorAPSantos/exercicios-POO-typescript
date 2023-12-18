import { Cliente } from "./classes/Cliente";
import { ContaCorrente } from "./classes/ContaCorrente";
import { ContaPoupanca } from "./classes/ContaPoupanca";

const igor = new Cliente({
    nome: 'Igor',
    email: 'igor@email.com',
    cpf: '00000000000'
})

const pedro = new Cliente({
    nome: 'Pedro',
    email: 'pedro@email.com',
    cpf: '00000000001'
})


igor.adicionarEndereco({
    bairro: 'Inocoop',
    cep: '44380000',
    cidade: 'Cruz das Almas',
    rua: 'Rua A'
})

const contaIgor = new ContaCorrente({
    agencia: '001',
    numero: '00000',
    saldo: 100000,
    senha: 'Igor123',
    cliente: igor
})
const contaPedro = new ContaPoupanca({
    agencia: '001',
    numero: '00001',
    saldo: 50000,
    senha: 'Pedro123',
    cliente: pedro
})

console.log(contaIgor.consultarSaldo('Igor123'));
console.log(contaIgor.sacar(200000, 'Igor123'));
console.log(contaIgor.sacar(5000, 'Igor123'));
console.log(contaIgor.depositar(500000));

console.log(contaPedro.consultarSaldo('Pedro123'));
console.log(contaPedro.sacar(200000, 'Pedro123'));
console.log(contaPedro.sacar(5000, 'Pedro123'));
console.log(contaPedro.depositar(500000));



