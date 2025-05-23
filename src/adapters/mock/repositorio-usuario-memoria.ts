import RepositorioUsuario from "@/core/ports/repositorio-usuario";
import Usuario from "../../core/usuario/model/usuario";

export default class RepositorioUsuarioMemoria implements RepositorioUsuario {
    
    private static readonly usuarios: Usuario[] = []
    
    async inserir(usuario: Usuario) {
        const usuarios = RepositorioUsuarioMemoria.usuarios
        
        const usuarioExistente = await this.obterPorEmail(usuario.email)
        if(usuarioExistente) return
        
        usuarios.push(usuario)
    }
    
    async obterPorEmail(email: string): Promise<Usuario | null> {
        const usuarios = RepositorioUsuarioMemoria.usuarios
        return usuarios.find(usuario => usuario.email === email) ?? null
    }
    
    async listar(): Promise<Usuario[]> {
        return RepositorioUsuarioMemoria.usuarios
    }

    async deletarTudo(): Promise<void> {
        const usuarios = RepositorioUsuarioMemoria.usuarios
        usuarios.splice(0, usuarios.length)
    }
}