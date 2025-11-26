# FrontEnd

## ⚙ Configuração do Projeto React

Este projeto React consome a API Laravel do Back-End.

---

### 1️⃣ dentro container Front-End

---

### 2️⃣ Instalando dependências

Dentro do container, instale todas as dependências do projeto:

```bash
npm install
```

---

### 3️⃣ Executando o projeto

Para iniciar a aplicação:

```bash
npm run dev -- --host
```
> Sera disponibilizado uma url para acessa o sistema no navegador de sua preferencia.
> Ele consumirá a API Laravel configurada no Back-End.
> usamos -- --host para que o servidor de desenvolvimento do React seja acessível fora do container Docker, permitindo que você abra o sistema no navegador do seu computador.

## 🏗 Arquitetura do Front-End

A aplicação React segue uma estrutura **modular e organizada**, com separação clara entre componentes, páginas e serviços.

### Estrutura geral de pastas:

```
FrontEnd/
├── node_modules/          
├── src/
│   ├── components/        ← Componentes
│   ├── services/          ← Serviços para consumir a API Laravel
│   ├── views/             ← Views
│   ├── App.jsx            ← Componente principal
│   └── index.jsx          ← Ponto de entrada da aplicação
└── package.json           ← Dependências do projeto

```
