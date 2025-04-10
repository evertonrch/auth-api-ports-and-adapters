import corrida from "@/core/corrida";
import TerminalUtil from "../util/terminal-util";
import Fusca from "@/core/Fusca";

export default async function dip() {
    TerminalUtil.titulo("DIP")
    corrida(new Fusca(), TerminalUtil.exibirAcao)
    await TerminalUtil.esperarEnter()
}