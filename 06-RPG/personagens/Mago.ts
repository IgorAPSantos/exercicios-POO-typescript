import { Personagem } from "../Personagem";

export class Mago extends Personagem {
    private quantidadeMagia = 5

    constructor(nome: string) {
        super(nome)
    }

    usarMagia(): string {
        if (this.quantidadeMagia === 0) {
            return `Sua magia acabou.`
        }
        this.quantidadeMagia--
        return `Magia usada`
    }

    criarMagia(): string {
        this.quantidadeMagia++
        return 'Magia criada'
    }
}