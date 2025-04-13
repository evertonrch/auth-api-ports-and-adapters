import dotenv from "dotenv"
dotenv.config()

import express from "express"
import RegistrarUsuarioController from "./external/api/registrar-usuario-controller"
import RegistrarUsuario from "./core/usuario/service/registrar-usuario"
import RepositorioUsuarioPg from "./external/database/repositorio-usuario-pg"
import BcryptSenhaCripto from "./external/security/bcrypt-senha-cripto"
import LoginUsuario from "./core/usuario/service/login-usuario"
import LoginUsuarioController from "./external/api/login-usuario-controller"
import ValidatorImpl from "./external/validator/validator-impl"
import ObterProdutoPorId from "./core/produto/service/obter-produto-por-id"
import ObterProdutoPorIdController from "./external/api/obter-produto-por-id-controller"
import UsuarioMiddleware from "./external/api/usuario-middleware"
import ListarUsuariosController from "./external/api/listar-usuarios-controller"
import ListarUsuarios from "./core/usuario/service/listar-usuarios"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const repositorioUsuario = new RepositorioUsuarioPg()
const provedorCripto = new BcryptSenhaCripto()
const validadorDados = new ValidatorImpl()

// casos de uso
const registrarUsuario = new RegistrarUsuario(repositorioUsuario, provedorCripto) 
const loginUsuario = new LoginUsuario(repositorioUsuario, provedorCripto, validadorDados)

new RegistrarUsuarioController(app, registrarUsuario)
new LoginUsuarioController(app, loginUsuario)

// ----- Rotas protegidas
const usuarioMiddleware = UsuarioMiddleware(repositorioUsuario)
const obterProdutoPorId = new ObterProdutoPorId()
const listarUsuarios = new ListarUsuarios(repositorioUsuario)

new ObterProdutoPorIdController(app, obterProdutoPorId, usuarioMiddleware)
new ListarUsuariosController(app, listarUsuarios, usuarioMiddleware)

app.listen(process.env.API_PORT ?? 3000)