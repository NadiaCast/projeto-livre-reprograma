# Projeto final da Reprograma 🚀 

![image](https://media2.giphy.com/media/D567hs4Dex0GEnAKOY/giphy.gif)


---


## Projeto
### `Sistema de controle de planos de aula para Personal Trainer`

> ⚠️ Eu sou personal trainer e vi a necessidade de criar um controle contendo os informações dos planos e valores. No futuro esse CRUD será utilizado em meu site.

Ela já está no ar e você pode acessar aqui: [meus planos](https://meusplanos.crud.com)

---

# 🧠 Contexto

O objetivo era criar um sistema onde fosse possível disponibilizar todos os planos  com valores e informações para facilitar a adesão de novas pessoas clientes.

<br />

### `Tecnologias usadas`

| Ferramenta | Descrição |
| --- | --- |
| `nodeJS` | runtime de javaScript|
| `MongoDB` | banco de dados|
| `npm` | gerenciador de pacotes|
| `JWT` | autenticação|
| `Vercel` | Hospedagem para a aplicação, fiz o deploy integrado com o github|
| `Github` | Hospedagem do código fonte integrado com gerenciador de versionamento|
| `JEST` | Framework para testes unitário|
| `Express` | Framework de nodeJS
| `Dotenv` | Pacote para ocultar variaveis de ambiente|
| `Mongoose` | Interface com MongoDB|

<br />
<br />

### `Modelagem dos dados`

Dados que um plano possui:

| Descrição                       | Tipo |
| --------------------------- | ------------------ |
| Título                 | `String`  |
| Valor                | `number`        |
| Descrição  | `String`            |
| Id           | `String`   |
| CreatedAt             | `Date`       |


<br />
<br />

### 😎 Diagrama

**irei incluir imagem do diagrama**

### Organização de pastas

```
 📁 ControlePlanos
   |
   |-  📁 src
   |    |
   |    |- 📁 database
   |         |- 📄 dbConnect.js
   |
   |    |- 📁 controllers
   |         |- 📄 planosController.js
   |     
   |
   |    |- 📁 models
   |         |- 📄 planosModel.js
   |       
   |
   |    |- 📁 routes
   |         |- 📄 planosRoute.js 
   |
   |     |- 📄 app.js 
   |        
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

### Rotas e operações

GET
- [x]  **"/planos"** Deverá retornar todas os planos cadastrados

POST
- [x]  "**/planos**" Deverá criar um plano e retornar o objeto criado

DELETE
- [x]  "**/deleteplano/[ID]**" Deverá deletar um plano e retornar uma mensagem de sucesso

PATCH
- [x]  "**/updateplano/[ID]**" Deverá alterar informação específica dentro de um plano por id específico e retorna o objeto alterado

REGRAS
- [x]  Não será possível criar um plano com o mesmo título


<br />
<br />
> ⚠️ O CRUD é um acrônimo para Create, Read, Update e Delete(criação, consulta, atualização e remoção de dados). São as 4 operações principais em um banco de dados. No MongoDB, usando o Mongoose aqui estão algumas formas de fazer:


| OPERAÇÃO | MONGODB | MONGOOSE |
| --- | --- | --- |
| `C`REATE | insertOne() | save() |
| `R`EAD | find() | find() |
| `U`PDATE | updateOne() | save() |
| `D`ELETE | deleteOne() | remove() |

<br />
<br />
---

_Foi incrível aprender com a Reprograma e dar meus primeiros passos no backEnd, conviver com todes e somar conhecimento!_

### Prazer, Nádia Castilho!

 <img src="https://media.licdn.com/dms/image/C5603AQE4IIfbyEf-QQ/profile-displayphoto-shrink_800_800/0/1646260667924?e=1694649600&v=beta&t=WDYjtRLaiQAwbUBP48fh4SPlucNnZJmGPoNDWwi4ozc" alt="Minha foto" width="200"> 


### Vamos nos conectar?

- [linkedin](https://www.linkedin.com/in/n%C3%A1dia-castilho-43912a115/)
- [github](https://github.com/NadiaCast)


<br>
Feito com 💜 por Nádia Castilho