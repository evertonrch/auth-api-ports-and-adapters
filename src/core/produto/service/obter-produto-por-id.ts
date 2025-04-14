import CasoDeUso from "@/core/shared/caso-de-uso";
import Produto from "../model/produto";
import Usuario from "@/core/usuario/model/usuario";

export type Request = {
    produtoId: string
    usuarioLogado: Usuario
}

export default class ObterProdutoPorId implements CasoDeUso<Request, Produto> {
   
    // mock
    async executar(entrada: Request): Promise<Produto> {
        return {
            id: entrada.produtoId,
            nome: `Produto 1`,
            preco: 10.00,
            consultadoPor: entrada.usuarioLogado.email
        }
    }
}