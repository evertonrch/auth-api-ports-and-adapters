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
    
    static exibirChaveValor(chave: string, valor: any): void {
        terminal.yellow(chave).green(valor).white("\n")
    }
    
    static exibeVelocidadeAtualComLimite(texto: string, velocidadeAtual: any): void  {
        terminal.yellow(texto).red(velocidadeAtual).white("\n")
    }
    
    static exibirAcao(texto: string) {
        terminal.brightBlue(texto)
    }
}