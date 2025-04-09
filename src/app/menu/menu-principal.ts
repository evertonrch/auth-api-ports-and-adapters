import TerminalUtil from "@/util/terminal-util";
import { terminal } from "terminal-kit";
import menuFundamentos from "./menu-fundamentos";

export default async function menuPrincipal() {
    TerminalUtil.titulo("Menu Principal")

    const response = await terminal.singleColumnMenu([
        "1. Fundamentos",
        "Sair"
    ]).promise

    switch(response.selectedIndex) {
        case 0: await menuFundamentos(); break
        case 1: process.exit(1)
    }

    await menuPrincipal()
}