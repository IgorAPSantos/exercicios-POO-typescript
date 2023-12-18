class Lampada {
    private potencia: number
    private estado: boolean

    constructor(potencia: number) {
        this.potencia = potencia
        this.estado = false
    }

    ligar() {
        if (!this.estado) {
            this.estado = true
        }
        console.log('Lâmpada ligada.');

    }

    desligar() {
        if (this.estado) {
            this.estado = false
        }
        console.log('Lâmpada desligada.');
    }

    medirPotencia() {
        return this.potencia
    }
}

const lampada = new Lampada(60)

lampada.ligar()
lampada.desligar()
console.log(lampada.medirPotencia());
