# 💊 Farmácia API - Projeto Final Bloco 02

API RESTful desenvolvida com **NestJS** para o gerenciamento de uma farmácia. O sistema permite o controle completo (CRUD) de **Categorias** e **Produtos**, incluindo relacionamentos entre as entidades e consultas personalizadas.

Este projeto foi desenvolvido como parte da avaliação do Bloco 02 do Bootcamp da **Generation Brasil**.

## 🛠️ Tecnologias Utilizadas

* **[NestJS](https://nestjs.com/)**: Framework Node.js para construção de aplicações escaláveis.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript com tipagem estática.
* **[TypeORM](https://typeorm.io/)**: ORM para mapeamento e manipulação do banco de dados.
* **[MySQL](https://www.mysql.com/)**: Banco de dados relacional.
* **[Swagger](https://swagger.io/)**: Documentação interativa da API.
* **Class Validator**: Validação de dados de entrada.

## ⚙️ Funcionalidades

### 🏷️ Categoria
* Cadastrar nova categoria.
* Listar todas as categorias.
* Buscar categoria por ID.
* **Buscar categoria por Descrição** (Busca personalizada).
* Atualizar dados da categoria.
* Deletar categoria.

### 💊 Produto
* Cadastrar novo produto (com validação de categoria existente).
* Listar todos os produtos (trazendo a categoria associada).
* Buscar produto por ID.
* **Buscar produto por Nome** (Busca personalizada).
* Atualizar dados do produto.
* Deletar produto.

## 🚀 Como rodar o projeto

### Pré-requisitos
* Node.js (v18 ou superior recomendado)
* MySQL Workbench ou terminal MySQL

### Passo a passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/LarissaRabello/projeto_final_bloco_02.git](https://github.com/LarissaRabello/projeto_final_bloco_02.git)
    ```

2.  **Entre na pasta do projeto:**
    ```bash
    cd projeto_final_bloco_02
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure o Banco de Dados:**
    * Certifique-se de que o MySQL está rodando na porta `3306`.
    * Crie um banco de dados (Schema) chamado `db_farmacia` no seu MySQL.
    * *Nota: O usuário e senha padrão estão configurados como `root`. Caso o seu seja diferente, altere no arquivo `src/app.module.ts`.*

5.  **Inicie o servidor:**
    ```bash
    npm run start:dev
    ```

O servidor iniciará na porta **4000**.

## 📚 Documentação da API (Swagger)

Com o servidor rodando, acesse a documentação interativa e teste as requisições diretamente pelo navegador:

🔗 **http://localhost:4000/api**

##
