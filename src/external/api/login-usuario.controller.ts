import { Express, Request, Response } from "express";
import LoginUsuario from "@/core/usuario/service/login-usuario";
import ProvedorJWT from "./provedor-jwt";

export default class LoginUsuarioController {

    constructor(servidor: Express, casoDeUso: LoginUsuario) {
        
        servidor.post("/api/auth", async (req: Request, res: Response) => {
            try {
                const usuario = await casoDeUso.executar({
                    email: req.body.email,
                    senha: req.body.senha
                })

                const provedorJwt = new ProvedorJWT(process.env.JWT_SECRET!)
                res.status(200).json({token: provedorJwt.gerar(usuario)})
            } catch(e: any) {
                res.status(400).json({
                    message: e.message,
                    statusCode: 400
                })
            }
        })
    }
}