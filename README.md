# 🔐 Auth API - Ports and Adapters

## 📘 Descrição

Este projeto é uma API de autenticação desenvolvida em **Node.js** que segue os princípios da **Arquitetura Hexagonal (Ports and Adapters)**. O objetivo é demonstrar como estruturar uma aplicação desacoplada, onde a lógica de negócio é isolada de detalhes de infraestrutura, facilitando testes, manutenção e escalabilidade.

---

## 🧱 Arquitetura Hexagonal

A arquitetura hexagonal, também conhecida como **Ports and Adapters**, organiza a aplicação em três camadas principais:

- **Core (Domínio):** Contém a lógica de negócio pura, independente de frameworks ou tecnologias externas.
- **Ports (Portas):** Interfaces que definem contratos para comunicação entre o core e o mundo externo.
- **Adapters (Adaptadores):** Implementações dos ports, conectando o core a tecnologias específicas como bancos de dados, serviços externos ou interfaces de usuário.

Essa abordagem promove um design modular e facilita a substituição de componentes externos sem impactar o núcleo da aplicação.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **TypeScript**
- **PostgreSQL**
- **Docker & Docker Compose**

---

## 📂 Estrutura do Projeto

```
auth-api-ports-and-adapters/
├── src/
│ ├── adapters/ # Implementações de adaptadores (API, DB...)
│ ├── core/ # Domínio (Casos de uso, portas, entidades)
│ ├── index.js
├── .env # Variáveis de ambiente
├── package.json
└── tsconfig.json
```

---

## ⚙️ Como Executar

1. **Clone o repositório:**

```bash
git clone https://github.com/evertonrch/auth-api-ports-and-adapters.git
cd auth-api-ports-and-adapters
```

2. Instale as dependências:

```
npm install
```

3. Configure as variáveis de ambiente (crie um arquivo .env):

```
DB_HOST=host_do_banco
DB_PORT=porta_do_banco
DB_USER=usuário_do_banco
DB_PASSWORD=senha_de_usuário_do_banco
DB_NAME=nome_do_banco
API_PORT=porta_da_api
JWT_SECRET=secret_do_jwt
```

4. Configure o serviço e execute o container do postgres:

```
docker compose up -d
```

5. Execute a aplicação:

```
npm run dev
```

## 📫 Contato

Para dúvidas, sugestões ou contribuições:

- [LinkedIn - Everton Rocha Monteiro](https://linkedin.com/in/everton-rocha-monteiro)
