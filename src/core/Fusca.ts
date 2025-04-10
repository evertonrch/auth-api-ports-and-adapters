import Carro from "./Carro";

export default class Fusca implements Carro {

    readonly velocidadeMaxima: number = 140
    private _velocidadeAtual: any = 0

    acelerar(): void {
        this._velocidadeAtual = Math.min(
            this._velocidadeAtual + 5,
            this.velocidadeMaxima
        )
    }

    frear(): void {
        this._velocidadeAtual = Math.max(
            this._velocidadeAtual - 5,
            0
        )        
    }

    get velocidadeAtual(): number {
        return this._velocidadeAtual
    }
}