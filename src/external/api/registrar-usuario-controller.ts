import { Express, Request, Response } from "express";
import RegistrarUsuario from "@/core/usuario/service/registrar-usuario";

export default class RegistrarUsuarioController {

    constructor(servidor: Express, casoDeUso: RegistrarUsuario) {
        
        servidor.post("/api/usuarios", async (req: Request, res: Response) => {
            try {
                await casoDeUso.executar({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                })

                res.status(201).send()
            } catch(e: any) {
                res.status(400).json({
                    message: e.message,
                    statusCode: 400
                })
            }
        })
    }
}