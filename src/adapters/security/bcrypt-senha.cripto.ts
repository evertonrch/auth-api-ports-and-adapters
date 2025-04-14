import bcrypt, { genSaltSync } from "bcrypt"
import ProvedorCriptografia from "@/core/ports/provedor-criptografia";

export default class BcryptSenhaCripto implements ProvedorCriptografia {
    
    criptografar(texto: string): string {
        return bcrypt.hashSync(texto, genSaltSync(10))
    }

    comparar(senha: string, encriptada: string): boolean {
        return bcrypt.compareSync(senha, encriptada)
    }
}