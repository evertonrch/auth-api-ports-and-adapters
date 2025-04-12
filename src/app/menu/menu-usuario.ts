import TerminalUtil from "@/app/util/terminal-util";
import RegistrarUsuario from "@/core/usuario/service/registrar-usuario";
import registrarUsuario from "../usuario/registrar-usuario";

export default async function menuUsuario() {
    TerminalUtil.titulo("Usuário")

    const [indice] = await TerminalUtil.menu([
        "1. Registrar",
        "Voltar"
    ])

    switch(indice) {
        case 0: await registrarUsuario(); break
        default: return
    }

    await menuUsuario()
}