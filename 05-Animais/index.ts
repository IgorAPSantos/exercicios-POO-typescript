import { Baleia } from "./mamiferos/Baleia";
import { Cachorro } from "./mamiferos/Cachorro";
import { Gato } from "./mamiferos/Gato";

const zoe = new Cachorro({
    nome: 'Zoe',
    peso: 10,
    altura: 50,
    comprimento: 70
})

const doralice = new Gato({
    nome: 'Doralice',
    peso: 5,
    altura: 30,
    comprimento: 50
})
const dolores = new Baleia({
    nome: 'Dolores',
    peso: 5000,
    altura: 300,
    comprimento: 3000
})

console.log(zoe.latir());
console.log(zoe.andar());
console.log(zoe.comer());

console.log(doralice.miar());
console.log(doralice.andar());
console.log(doralice.comer());

console.log(dolores.nadar());
console.log(dolores.comer());