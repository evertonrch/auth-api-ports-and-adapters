import Usuario from "../usuario/model/usuario"

export default interface RepositorioUsuario {
    inserir(usuario: Usuario): Promise<void>
    obterPorEmail(email: string): Promise<Usuario | null>
    listar(): Promise<Usuario[]>
    deletarTudo(): Promise<void>
}