import CasoDeUso from "@/core/shared/caso-de-uso";
import Usuario from "../model/usuario";
import RepositorioUsuario from "../../ports/repositorio-usuario";
import ProvedorCriptografia from "../../ports/provedor-criptografia";
import Erros from "@/core/shared/Erros";
import ValidaDados from "../../ports/valida-dados";

export type LoginRequest = {
    email: string
    senha: string
}

export default class LoginUsuario implements CasoDeUso<LoginRequest, Usuario> {

    constructor(
        private repositorio: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia,
        private validaDados: ValidaDados
    ){}
    
    async executar(entrada: LoginRequest): Promise<Usuario> {
        if(!this.validaDados.ehEmailValido(entrada.email)) {
            throw new Error(Erros.EMAIL_MAL_FORMADO)
        }

        const usuarioExistente = await this.repositorio.obterPorEmail(entrada.email)
        if(!usuarioExistente) {
            throw new Error(Erros.USUARIO_NAO_EXISTE)
        }

        const ehSenhaValida = this.provedorCripto.comparar(entrada.senha, usuarioExistente.senha!)
        if(!ehSenhaValida) {
            throw new Error(Erros.SENHA_INVALIDA)
        }

        return {...usuarioExistente, senha: undefined}
    }
}