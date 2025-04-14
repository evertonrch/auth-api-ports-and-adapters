import CasoDeUso from "@/core/shared/caso-de-uso";
import RepositorioUsuario from "../../ports/repositorio-usuario";

export default class DeletarUsuarios implements CasoDeUso<any, void> {

    constructor(
        private repositorio: RepositorioUsuario
    ){}
    
    async executar(entrada: any): Promise<void> {
        await this.repositorio.deletarTudo()
    }
}