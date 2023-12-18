import { Personagem } from "../Personagem";

export class Arqueiro extends Personagem {
    quantidadeFlechas = 5

    constructor(nome: string) {
        super(nome)
    }

    atirarFlecha(): string {
        if (this.quantidadeFlechas === 0) {
            return 'Suas flechas acabaram.'
        }
        this.quantidadeFlechas--
        return 'Flecha lançada.'
    }

    construirFlecha(): string {
        this.quantidadeFlechas++
        return 'Flecha criada'
    }
}