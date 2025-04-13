export default interface ProvedorCriptografia {
    criptografar(texto: string): string
    comparar(senha: string, encriptada: string): boolean
}