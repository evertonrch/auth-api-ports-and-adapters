import { Express, Request, Response } from "express"
import DeletarUsuarios from "@/core/usuario/service/deletar-usuarios";

export default class DeletarUsuariosController {

    constructor(
        private servidor: Express,
        private casoDeUso: DeletarUsuarios,
        ...middlewares: any[]
    ){

        this.servidor.delete("/api/usuarios", ...middlewares, async (req: Request, res: Response) => {
            await this.casoDeUso.executar(null)
            res.status(204).send()
        })
    }
}