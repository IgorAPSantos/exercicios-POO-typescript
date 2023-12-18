
class Pessoa {
    constructor(
        private nome: string,
        private idade: number,
        private nomePai: string,
        private nomeMae: string
    ) { }

    verificarIrmandade(pessoa: Pessoa): boolean {
        const { nomeMae: nomeMae2, nomePai: nomePai2 } = pessoa
        return this.nomeMae === nomeMae2 || this.nomePai === nomePai2
    }

    verificarMaisVelho(pessoa: Pessoa): boolean {
        return (this.idade > pessoa.idade)
    }
}

const igor = new Pessoa(
    'Igor',
    21,
    'André Pádua',
    'Débora Cristina'
)
const anna = new Pessoa(
    'Ana',
    24,
    'André Pádua',
    'Débora Cristina'
)
const romulo = new Pessoa(
    'Romulo',
    21,
    'José Alberto',
    'Adriana Lopes'
)

console.log(igor.verificarIrmandade(anna));
console.log(igor.verificarIrmandade(romulo));
console.log(igor.verificarMaisVelho(romulo));
console.log(romulo.verificarMaisVelho(igor));
