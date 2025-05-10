# Aplicação Web - Vagas de Emprego

Este projeto foi desenvolvido como parte do curso [React Crash Course](https://www.youtube.com/watch?v=LDB4uaJ87e0) do canal **Traversy Media**. Ele fornece uma introdução prática à criação de aplicações em React com Vite, Tailwind CSS, React Router e outras bibliotecas úteis.

## ✨ Funcionalidades

- Interface moderna e responsiva com Tailwind CSS
- Navegação entre páginas com React Router
- Notificações com React Toastify
- Ícones com React Icons
- Indicadores de carregamento com React Spinners
- Simulação de backend com JSON Server

---

## 🛠️ Tecnologias Utilizadas

### Dependências

- **React** – Biblioteca principal para construção da UI
- **React DOM** – Manipulação do DOM com React
- **React Router DOM** – Roteamento entre páginas
- **React Icons** – Conjunto de ícones populares para React
- **React Spinners** – Spinners e loaders para estados de carregamento
- **React Toastify** – Notificações toast
- **Tailwind CSS** – Framework utilitário CSS
- **@tailwindcss/vite** – Integração entre Tailwind e Vite

### DevDependencies

- **Vite** – Ferramenta de build rápida para desenvolvimento moderno
- **@vitejs/plugin-react** – Suporte React para Vite
- **ESLint** – Linter para manter qualidade do código
- **@eslint/js** – Suporte JavaScript moderno para ESLint
- **eslint-plugin-react-hooks** – Validação de hooks do React
- **eslint-plugin-react-refresh** – Suporte para HMR com Vite
- **@types/react** e **@types/react-dom** – Tipagens para desenvolvimento com TypeScript
- **json-server** – Fake API REST para simular backend
- **globals** – Conjunto de variáveis globais para linting

---

## 📁 Estrutura do Projeto

```
my-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/     # Componentes reutilizáveis
│   ├── layouts/
│   ├── pages/          # Páginas da aplicação
│   ├── App.css
│   ├── App.jsx         # Componente principal
│   ├── index.css
│   ├── jobs.json      # Base de dados mock do JSON Server
│   └── main.jsx       # Estilos gerais (Tailwind)
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── tailwind.config.js  # Configuração do Tailwind
├── vite.config.js      # Configuração do Vite
├── package.json
└── README.md
```

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o servidor JSON (fake backend)

```bash
npm run server
```

> Isso inicia uma API REST fake em http://localhost:5000, por exemplo

### 4. Execute a aplicação React

Em outro terminal:

```bash
npm run dev
```

> Acesse em: http://localhost:5173

---

## 📦 Scripts Disponíveis

- `npm run dev` – Inicia o servidor de desenvolvimento com Vite
- `npm run build` – Gera a versão otimizada da aplicação
- `npm run lint` – Executa o ESLint para encontrar erros no código
- `npm run preview` – Pré-visualiza a build da aplicação
- `npm run server` – Inicia o backend fake com os dados localizados em `src/jobs.json` na porta 8000

---

## 📌 Observações

- Este projeto é voltado para fins educacionais.
- Pode ser expandido com recursos como autenticação, integração com APIs reais e uso de context API ou Redux.
- Recomendado o uso do Node.js 16+ para compatibilidade com o Vite.

---

## 📄 Licença

Este projeto é livre para uso e modificação. A aula original pertence a **Traversy Media**.

---

## 🙋‍♂️ Estudante

**Matheus Germano**  
💼 [linkedin.com/in/math-germano](https://linkedin.com/in/math-germano)  
📧 silvaa.matheus112@gmail.com  
🐱 [github.com/m-germano](https://github.com/m-germano)
