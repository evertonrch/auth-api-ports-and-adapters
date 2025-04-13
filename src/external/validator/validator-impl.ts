import validator from "validator"
import ValidaDados from "@/core/usuario/service/valida-dados";

export default class ValidatorImpl implements ValidaDados {
    
    ehEmailValido(email: string): boolean {
        return validator.isEmail(email)
    }
}