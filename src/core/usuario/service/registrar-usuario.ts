import CasoDeUso from "@/core/shared/caso-de-uso";
import Erros from "@/core/shared/Erros";
import Id from "@/core/shared/Id";
import ProvedorCriptografia from "./provedor-criptografia";
import RepositorioUsuario from "./repositorio-usuario";
import Usuario from "../model/Usuario";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {
    
    constructor(
        private repositorio: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ){}

    async executar(entrada: Usuario): Promise<void> {
        const usuarioExistente = await this.repositorio.obterPorEmail(entrada.email)
        if(usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE)

        const novoUsuario: Usuario = {
            id: Id.gerarHash(),
            nome: entrada.nome,
            email: entrada.email,
            senha: this.provedorCripto.criptografar(entrada.senha!)
        }

        this.repositorio.inserir(novoUsuario)        
    }
    
}