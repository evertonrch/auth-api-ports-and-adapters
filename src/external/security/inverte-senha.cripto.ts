import ProvedorCriptografia from "../../core/ports/provedor-criptografia";

export default class InverteSenhaCripto implements ProvedorCriptografia {
    
    criptografar(texto: string): string {
        return texto.split("").reverse().join("")
    }
    
    comparar(senha: string, encriptada: string): boolean {
        return this.criptografar(senha) === encriptada
    }
}