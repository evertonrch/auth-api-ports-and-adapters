import Erros from "@/core/shared/Erros"
import validator from "validator"

export default class ValidatorUtils {

    static ehEmailValido(email: string): void {
        if(!validator.isEmail(email)) {
            throw new Error(Erros.EMAIL_MAL_FORMADO)
        }
    }

    static ehSenhaForte(senha: string): void {
        if(!validator.isStrongPassword(senha)){
            console.log("senha: ", senha)
            throw new Error(Erros.SENHA_FRACA)
        }
    }
}