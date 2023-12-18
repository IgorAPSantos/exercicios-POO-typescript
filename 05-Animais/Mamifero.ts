export type Animal = {
    nome: string
    peso: number
    altura: number
    comprimento: number
}

export class Mamifero {
    nome: string
    peso: number
    altura: number
    comprimento: number

    constructor(animal: Animal) {
        this.nome = animal.nome
        this.peso = animal.peso
        this.altura = animal.altura
        this.comprimento = animal.comprimento
    }

    comer() {
        return "Animal comendo"
    }
}