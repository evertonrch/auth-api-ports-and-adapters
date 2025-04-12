import TerminalUtil from "@/app/util/terminal-util";
import menuFundamentos from "./menu-fundamentos";
import menuUsuario from "./menu-usuario";

export default async function menuPrincipal() {
    TerminalUtil.titulo("Menu Principal")

    const [indice] = await TerminalUtil.menu([
        "1. Fundamentos",
        "2. Usuário",
        "Sair"
    ])

    switch(indice) {
        case 0: await menuFundamentos(); break
        case 1: await menuUsuario(); break
        default: process.exit(1)
    }

    await menuPrincipal()
}