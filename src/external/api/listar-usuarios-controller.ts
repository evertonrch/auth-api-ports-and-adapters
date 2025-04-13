import {Express, Request, Response} from "express"
import ListarUsuarios from "@/core/usuario/service/listar-usuarios";

export default class ListarUsuariosController {

    constructor(
        private servidor: Express,
        private casoDeUso: ListarUsuarios,
        ...middlewares: any[]
    ) {

        this.servidor.get("/api/usuarios", ...middlewares, async (req: Request, res: Response) => {
            const usuarios = await this.casoDeUso.executar(null)

            if(usuarios.length === 0) {
                res.status(204).json({ usuarios })
            }

            res.status(200).json({ usuarios })
        })
    }

}