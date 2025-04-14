import Usuario from "@/core/usuario/model/usuario";
import RepositorioUsuario from "@/core/ports/repositorio-usuario";
import db from "./db";

export default class RepositorioUsuarioPg implements RepositorioUsuario {
    
    async inserir(usuario: Usuario): Promise<void> {
        const sql = "INSERT INTO usuarios (id, nome, email, senha) values ($1, $2, $3, $4)"
        await db.query(sql, [usuario.id, usuario.nome, usuario.email, usuario.senha])
    }
    
    async obterPorEmail(email: string): Promise<Usuario | null> {
        const sql = "SELECT * FROM usuarios WHERE email = $1"
        const usuario = await db.oneOrNone(sql, [email])
        
        if(!usuario) return null
        
        return usuario
    }
    
    async listar(): Promise<Usuario[]> {
        const sql = "SELECT * FROM usuarios"
        return await db.query(sql)
    }
    
    async deletarTudo(): Promise<void> {
        const sql = "DELETE FROM usuarios"
        await db.query(sql)
    }
}