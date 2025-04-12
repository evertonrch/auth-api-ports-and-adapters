import BcryptSenhaCripto from "@/adapter/security/bcrypt-senha-cripto";
import RegistrarUsuario from "@/core/usuario/service/registrar-usuario";
import RepositorioUsuarioPg from "@/adapter/database/repositorio-usuario-pg";
import TerminalUtil from "../util/terminal-util";
import Usuario from "@/core/usuario/model/Usuario";

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuário")
    
    const nome = await TerminalUtil.campoRequerido("Nome:")
    const email = await TerminalUtil.campoRequerido("Email:")
    const senha = await TerminalUtil.campoRequerido("Senha:")

    const usuario: Usuario = {nome, email, senha}
    
    try {
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
}
