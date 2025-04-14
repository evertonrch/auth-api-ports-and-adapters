import validator from "validator"
import ValidaDados from "@/core/ports/valida-dados";

export default class ValidatorImpl implements ValidaDados {
    
    ehEmailValido(email: string): boolean {
        return validator.isEmail(email)
    }
}