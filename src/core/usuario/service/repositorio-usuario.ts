import Usuario from "../model/Usuario"


export default interface RepositorioUsuario {
    inserir(usuario: Usuario): Promise<void>
    obterPorEmail(email: string): Promise<Usuario | null>
}