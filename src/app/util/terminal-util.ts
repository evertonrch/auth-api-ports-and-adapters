import { terminal } from "terminal-kit"

export default class TerminalUtil {
    
    static titulo(texto: string): void {
        terminal.clear()
        terminal.magenta(`${texto}\n`)
        terminal.magenta("-".repeat(texto.length) + "\n")
    }
    
    static limpar(): void {
        terminal.clear()
    }
    
    static async menu(opcoes: string[]): Promise<[number, string]> {
        const response = await terminal.singleColumnMenu(opcoes).promise
        return [response.selectedIndex, response.selectedText]
    }
    
    static async confirmacao(texto: string): Promise<boolean> {
        terminal.yellow(`\n${texto}`)
        const confirmacao = await terminal.singleLineMenu(["Sim", "Não"]).promise
        return confirmacao.selectedIndex === 0
    }
    
    static async selecao(texto: string, opcoes: string[]): Promise<[number, string]> {
        terminal.yellow(`\n${texto}`)
        const confirmacao = await terminal.singleLineMenu(opcoes).promise
        return [confirmacao.selectedIndex, confirmacao.selectedText]
    }
    
    static async esperarEnter() {
        terminal.white(`\nPressione ENTER para continuar...`)
        await terminal.inputField({echo: false}).promise
    }
    
    static exibirChaveValor(chave: string, valor: any, color: string = ""): void {
        if(color === "red") {
            terminal.yellow(chave).red(valor).white("\n")
        } else {
            terminal.yellow(chave).green(valor).white("\n")
        }
    }
    
    static exibirAcao(texto: string) {
        terminal.brightBlue(texto)
    }
    
    static async campoRequerido(label: string, valorPadrao: string = ""): Promise<string> {
        terminal.yellow(`\n${label}`)
        const valor = await terminal.inputField({default: valorPadrao}).promise
        return valor ? valor : TerminalUtil.campoRequerido(label)
    }
    
    static sucesso(mensagem: string, novaLinha: boolean = true) {
        terminal.green((novaLinha ? "\n" : "") + mensagem)    
    }
    
    static erro(message: string, novaLinha: boolean = true) {
        terminal.red((novaLinha ? "\n" : "") + message)
    }
}