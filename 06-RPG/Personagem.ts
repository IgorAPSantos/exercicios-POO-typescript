export class Personagem {
    public nome: string
    private velocidade = 0

    constructor(nome: string) {
        this.nome = nome
    }

    andar(): string {
        this.velocidade += 1
        return `Velocidae: ${this.velocidade}`
    }

    parar(): string {
        this.velocidade = 0
        return `Velocidae: ${this.velocidade}`
    }
}