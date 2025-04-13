import jwt from "jsonwebtoken"
import Usuario from "@/core/usuario/model/Usuario";

export default class ProvedorJWT {

    constructor(private secret: string) {}

    gerar(dados: string | object): string {
        return jwt.sign(dados, this.secret, { expiresIn: "1d"})
    }

    obter(token: string): string | object {
        return jwt.verify(token, this.secret)
    }
}