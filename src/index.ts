import dotenv from "dotenv"
dotenv.config()

import express from "express"
import RegistrarUsuarioController from "./adapters/api/registrar-usuario.controller"
import RegistrarUsuario from "./core/usuario/service/registrar-usuario"
import RepositorioUsuarioPg from "./adapters/database/repositorio-usuario-pg"
import BcryptSenhaCripto from "./adapters/security/bcrypt-senha.cripto"
import LoginUsuario from "./core/usuario/service/login-usuario"
import LoginUsuarioController from "./adapters/api/login-usuario.controller"
import ValidatorImpl from "./adapters/validator/validator-impl"
import ObterProdutoPorId from "./core/produto/service/obter-produto-por-id"
import ObterProdutoPorIdController from "./adapters/api/obter-produto-por-id.controller"
import UsuarioMiddleware from "./adapters/api/usuario.middleware"
import ListarUsuariosController from "./adapters/api/listar-usuarios.controller"
import ListarUsuarios from "./core/usuario/service/listar-usuarios"
import DeletarUsuarios from "./core/usuario/service/deletar-usuarios"
import DeletarUsuariosController from "./adapters/api/deletar-usuarios.controller"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const repositorioUsuario = new RepositorioUsuarioPg()
const provedorCripto = new BcryptSenhaCripto()
const validadorDados = new ValidatorImpl()

// casos de uso
const registrarUsuario = new RegistrarUsuario(repositorioUsuario, provedorCripto) 
const loginUsuario = new LoginUsuario(repositorioUsuario, provedorCripto, validadorDados)
const usuarioMiddleware = UsuarioMiddleware(repositorioUsuario)
const obterProdutoPorId = new ObterProdutoPorId()
const listarUsuarios = new ListarUsuarios(repositorioUsuario)
const deletarUsuarios = new DeletarUsuarios(repositorioUsuario)

// ----- Rotas abertas
new RegistrarUsuarioController(app, registrarUsuario)
new LoginUsuarioController(app, loginUsuario)

// ----- Rotas protegidas
new ObterProdutoPorIdController(app, obterProdutoPorId, usuarioMiddleware)
new ListarUsuariosController(app, listarUsuarios, usuarioMiddleware)
new DeletarUsuariosController(app, deletarUsuarios, usuarioMiddleware)

app.listen(process.env.API_PORT ?? 3000)