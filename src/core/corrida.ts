import Carro from "./Carro";

export default function corrida(carro: Carro, log: (texto: string) => void = console.log) {
    Array.from({length: 10}).forEach(() => {
        carro.acelerar()
        log("\nValocidade atual: " + carro.velocidadeAtual)
    })

    Array.from({length: 10}).forEach(() => {
        carro.frear()
        log(`\nValocidade atual: ${carro.velocidadeAtual}`)
    })
}