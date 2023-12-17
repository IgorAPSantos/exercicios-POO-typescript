class Calculadora {
    private numeroX: number
    private numeroY: number

    constructor(numeroX: number, numeroY: number) {
        this.numeroX = numeroX
        this.numeroY = numeroY
    }

    somar(): number {
        return this.numeroX + this.numeroY
    }

    subtrair(): number {
        return this.numeroX - this.numeroY
    }

    multiplicar(): number {
        return this.numeroX * this.numeroY
    }

    dividir(): number {
        return this.numeroX / this.numeroY
    }

}

const calculadora = new Calculadora(5, 2)

console.log('Soma:', calculadora.somar())
console.log('Subtração:', calculadora.subtrair())
console.log('Multiplicação:', calculadora.multiplicar())
console.log('Divisão:', calculadora.dividir())

