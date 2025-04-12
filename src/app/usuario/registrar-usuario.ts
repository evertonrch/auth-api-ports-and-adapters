import BcryptSenhaCripto from "@/adapter/security/bcrypt-senha-cripto";
import RegistrarUsuario from "@/core/usuario/service/registrar-usuario";
import RepositorioUsuarioPg from "@/adapter/database/repositorio-usuario-pg";
import TerminalUtil from "../util/terminal-util";
import Usuario from "@/core/usuario/model/Usuario";
import ValidatorUtils from "../util/validator-util";

type DadosInput = {
    nome: string
    email: string
    senha: string
}

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuário")
    
    try {
        const {nome, email, senha} = await capturaDados()
        
        const usuario: Usuario = {nome, email, senha}
        
        const repositorio = new RepositorioUsuarioPg()
        const senhaCripto = new BcryptSenhaCripto()
        const casoDeUso = new RegistrarUsuario(repositorio, senhaCripto)
        
        await casoDeUso.executar(usuario)
        
        TerminalUtil.sucesso(`Usuário ${usuario.nome} registrado com sucesso.`)
    } catch(e: any) {
        TerminalUtil.erro(e.message)
    } finally {
        await TerminalUtil.esperarEnter()
    }

    async function capturaDados(): Promise<DadosInput> {
        const nome = await TerminalUtil.campoRequerido("Nome:")
    
        const email = await TerminalUtil.campoRequerido("Email (user@mail.com):")
        ValidatorUtils.ehEmailValido(email)
    
        const senha = await TerminalUtil.campoRequerido("Senha (minímo 8, maiúsculas, números e caracteres especiais) :")
        ValidatorUtils.ehSenhaForte(senha)
    
        return {nome, email, senha}
    }
}
