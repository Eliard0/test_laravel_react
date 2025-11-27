# test_laravel_react

## 🧩 Descrição do projeto
Este repositório é um **monorepo** que contém dois projetos distintos e integrados:  

1. **Back-End:** Laravel (PHP 8.3)  
2. **Front-End:** React (JavaScript ES6+)

O projeto foi desenvolvido como parte do **Desafio Técnico para Desenvolvedor(a) Fullstack (PHP/React)**. O objetivo do desafio foi criar uma **aplicação TodoList** seguindo boas práticas de desenvolvimento, arquitetura limpa e desacoplamento entre front e back.

Este repositório utiliza **Docker e Docker Compose** para facilitar o desenvolvimento e garantir consistência do ambiente.

---

## 🏗 Arquitetura do Monorepo

### Estrutura geral:

```
/
├── BackEnd/        ← Código Laravel (Back-End)
├── FrontEnd/       ← Código React (Front-End)
└── docker-compose.yml  ← Configuração Docker para rodar ambos os projetos
```

**Fluxo resumido:**

```
[React (Front-End)]
        |
        v
[API Laravel (Back-End)]
        |
        v
[PostgreSQL Database]
```

---

## 🛠 Tecnologias utilizadas

- **Back-End:** PHP 8.3, Laravel 12, Composer  
- **Front-End:** JavaScript (ES6+), React JS, npm/yarn, Tailwind CSS  
- **Banco de dados:** PostgreSQL 16  
- **Ambiente:** Docker, Docker Compose  
- **Controle de versão:** Git (fluxo básico e organizado)  

---

## ⚡ Como rodar o monorepo

### Pré-requisitos
- Docker e Docker Compose instalados
- Git
- Ultilize um editor de codigo de sua preferencia

### Passos
```bash
# Clone o repositório
git clone https://github.com/Eliard0/test_laravel_react.git
cd test_laravel_react

# Suba ambos os projetos via Docker
docker-compose up --build -d
```


## 📂 Configuração dentro dos containers

Após subir os containers com Docker, abra o terminal do seu editor de codigo e entre nos containers gerados para iniciar a configuração dos projetos, Recomenda-se abrir dois terminais: um para o Front-End e outro para o Back-End.
### Acessando o container Back-End
```bash
docker exec -it backend bash
```
- Dentro do container, instale todas as dependências necessárias:
```bash
composer install
```
- Em seguida, vá para o README dentro da pasta **BackEnd** para seguir as orientações de configuração do banco de dados e servidor.

### Acessando o container Front-End
```bash
docker exec -it frontend sh
```
- Aqui usamos `sh` e não `bash` porque o container do Front-End é baseado em uma imagem mais leve que não possui o `bash` instalado, apenas o shell `sh`.
- Dentro do container, instale as dependências do projeto:
```bash
npm install
```
- Após isso, siga o README dentro da pasta **FrontEnd** para rodar e configurar o front-end conforme necessário.
