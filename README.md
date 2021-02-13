<h1 align="center">
  <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
  Desafio - Projeto Foodfy
</h3>

<p align="center">
  Aplicação de gerenciamentos de receitas e chefs. 🍔
</p>

<hr>

## ✨ Layout

<div align="center">
  <img src="https://camo.githubusercontent.com/149256ed02c9054607878cd5f68d083ee99ae27d/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f6d6f636b75702e706e67">
</div>
<div align="center">
  <img src="https://camo.githubusercontent.com/19b7dae0fdba337226622d5170d6589c9c9ee6f2/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f6d6f636b75702d646574616c68652d726563656974612e706e67">
</div>

## 💻 Tecnlogias usadas

- HTML
- CSS
- JavaScript
- Nunjucks
- NodeJS
- Nodemailer
- Express
- PostgresSQL
- Faker

## 🚀 Para executar o projeto

**1. Clone o repositório e instale as depêndencias**

```
$ git clone https://github.com/pedrofbaltar/foodfy-project

$ cd foodfy-project

$ npm install
```

---

**2. Configuração do banco de dados (Windows)**

É necessário ter instalado o [PostgresSQL](https://www.postgresql.org/download/) e o [Postbird](https://www.electronjs.org/apps/postbird).

```
$ cd "C:\Program Files\PostgreSQL\12\bin\"

$ .\pg_ctl.exe -D "C:\Program Files\PostgreSQL\12\data" start

$ .\pg_ctl.exe -D "C:\Program Files\PostgreSQL\12\data" stop
```

Depois de ligá-lo, abra o Postbird e crei um banco de dados com o nome `foodfy`.

Logo após, no canto superior esquerdo, acesse `File > Import .sql file`, e importe o arquivo [foodfydb.sql](https://github.com/pedrofbaltar/foodfy-project/blob/main/foodfydb.sql) deste repositório.

Preencha suas informações de usuário e senha do prostgres no arquivo [db.js](https://github.com/pedrofbaltar/foodfy-project/blob/main/src/config/db.js).

Verifique se todas as tabelas foram importadas corretamente.

---

**3. Populando o banco de dados**

Populando o banco de dados com informações falsas.

```
$ node seeds.js
```

---

**4. Configurando o Mailtrap**

Faça seu cadastro no [Mailtrap](https://mailtrap.io/).

Acesse a área `Inboxes`, então crie uma nova inbox com o nome `foodfy`.

Feito isso, entre na aba `SMTP Settings` e mude de `Intergrations` para `Nodemailer`.

Copie o código gerado, e cole no arquivo.

---

**Administrador padrão:** admin@admin.com
**Senha:** admin

## 📜 Lincença

Esse projeto está sob a licença do MIT. Veja o arquivo [LICENSE](https://github.com/pedrofbaltar/foodfy-project/blob/main/LICENSE).

<hr>

Com 💜 [Pedro Felipe Baltar](https://github.com/pedrofbaltar)
