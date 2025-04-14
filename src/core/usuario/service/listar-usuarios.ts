import CasoDeUso from "@/core/shared/caso-de-uso";
import Usuario from "../model/usuario";
import RepositorioUsuario from "../../ports/repositorio-usuario";

export default class ListarUsuarios implements CasoDeUso<any, Usuario[]> {

    constructor(
        private repositorio: RepositorioUsuario
    ){}
    
    async executar(entrada: any): Promise<Usuario[]> {
        return await this.repositorio.listar()
    }
}