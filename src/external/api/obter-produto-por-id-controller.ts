import ObterProdutoPorId from "@/core/produto/service/obter-produto-por-id";
import { Express, Request, Response } from "express";

export default class ObterProdutoPorIdController {

    constructor(
        private servidor: Express, 
        private casoDeUso: ObterProdutoPorId,
        ...middlewares: any[]
    ) {
        
        this.servidor.get("/api/produtos/:id", ...middlewares, async (req: Request, res: Response) => {
            try {
                const produto = await this.casoDeUso.executar({
                    produtoId: req.params.id,
                    usuarioLogado: (req as any).usuario
                })
                
                res.status(200).json({ ...produto })
            } catch(e: any) {
                res.status(400).json({
                    message: e.message,
                    statusCode: 400
                })
            }
        })
    }
}