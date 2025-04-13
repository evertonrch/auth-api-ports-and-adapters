import RepositorioUsuario from "@/core/usuario/service/repositorio-usuario"
import {Request, Response, NextFunction} from "express"
import ProvedorJWT from "./provedor-jwt"
import Usuario from "@/core/usuario/model/Usuario"
import Erros from "@/core/shared/Erros"

export default function UsuarioMiddleware(repositorio: RepositorioUsuario) {
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log("sdfsdf")
        const acessoNegado = () => res.status(403).json({message: Erros.ACESSO_NEGADO})

        const token = req.headers.authorization?.replace("Bearer ", "")
        if(!token) {
            return acessoNegado()
        }

        try {
            const provedorJwt = new ProvedorJWT(process.env.JWT_SECRET!)
            const usuarioPayload = provedorJwt.obter(token as string) as Usuario
    
            const usuarioExiste = await repositorio.obterPorEmail(usuarioPayload.email)
            if (!usuarioExiste) {
                return acessoNegado();
            }
            
            (req as any).usuario = usuarioExiste;
            next()
        } catch(e: any) {
            res.status(500).json({
                message: "Não foi possível realizar a autenticação",
                detail: e.message,
                statusCode: 500
            })
        }
    }
}