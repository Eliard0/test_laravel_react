# BackEnd

## ⚙ Configuração do Projeto Laravel (API)

### 1️⃣ Configuração inicial

Dentro do container **Back-End** caso caso tenha executado o comando composer install pule para o passo numero 2:

1. Instale as dependências:

```bash
composer install
```

2. Copie o arquivo de exemplo `.env.example` para criar o `.env`:

```bash
cp .env.example .env
```

3. Gere a chave de aplicação Laravel:

```bash
php artisan key:generate
```

---

### 2️⃣ Configuração do banco de dados

No arquivo `.env`, configure as credenciais do PostgreSQL:

```dotenv
DB_CONNECTION=pgsql
DB_HOST=postgres
DB_PORT=5432
DB_DATABASE=appdb
DB_USERNAME=admin
DB_PASSWORD=admin123
```
---

### 3️⃣ Rodando migrations

Para criar as tabelas no banco de dados:

```bash
php artisan migrate
```

---

### 4️⃣ Iniciando o servidor Laravel

```bash
php artisan serve
```

> O terminal disponibilizara um url para ter acesso a api do sistema exemplo: `http://localhost:8000` no final coloque `/api/tasks`.
> Para testar a API, utilize o Postman ou Insomnia 
