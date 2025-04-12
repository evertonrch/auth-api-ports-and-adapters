import bcrypt, { genSaltSync } from "bcrypt"
import ProvedorCriptografia from "@/core/usuario/service/provedor-criptografia";

export default class BcryptSenhaCripto implements ProvedorCriptografia {

    criptografar(texto: string): string {
        return bcrypt.hashSync(texto, genSaltSync(10))
    }
}