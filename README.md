<div align="center">

# 🏠 Projeto Airbnb Clone

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

[![GitHub](https://img.shields.io/badge/GitHub-joaogabrieldev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joaogabrieldev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-João_Gabriel-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joaogabrielrocha)

**Uma aplicação web moderna que recria a página do Airbnb, desenvolvida com Next.js, React e TypeScript**

</div>

---

## 📋 Índice

- [🌐 Deploy](#-deploy)
- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📦 Bibliotecas e Dependências](#-bibliotecas-e-dependências)
- [🏗️ Arquitetura e Padrões de Projeto](#️-arquitetura-e-padrões-de-projeto)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Como Executar](#️-como-executar)
- [👨‍💻 Autor](#-autor)

## 🌐 Deploy

<div align="center">

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://projeto-airbnb.vercel.app/)

</div>

A aplicação está hospedada na **Vercel** e pode ser acessada através do link:

### 🔗 [https://projeto-airbnb.vercel.app/](https://projeto-airbnb.vercel.app/)

---

## 📖 Sobre o Projeto

Este projeto é um clone da interface do Airbnb, desenvolvido como uma aplicação web moderna e responsiva. A aplicação permite visualizar acomodações disponíveis, filtrar por diferentes categorias, visualizar detalhes de cada propriedade e explorar depoimentos de hóspedes.

### ✨ Funcionalidades Principais

- 🏡 **Listagem de Acomodações**: Visualização em grid responsivo de todas as propriedades disponíveis
- 📸 **Galeria de Fotos**: Visualização de imagens das acomodações com Swiper
- 📝 **Detalhes da Acomodação**: Página dedicada com informações completas de cada propriedade
- 💬 **Depoimentos**: Seção de avaliações e comentários dos hóspedes
- 📱 **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela

### 🔜 Próximas Funcionalidades

- 🔍 **Sistema de Busca**: Barra de pesquisa para encontrar acomodações

- 🏷️ **Filtros por Categoria**: Filtros horizontais para diferentes tipos de propriedades

- ⚙️ **Server-Side**> Implementação do Back-end com Node.js e Banco SQL com Prisma

---

## 📦 Tecnologias, Bibliotecas e Dependências

<div align="center">

### 🔧 Dependências Principais

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="50" height="50" alt="Next.js" />
<img width="20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" height="50" alt="React" />
<img width="20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" height="50" alt="React DOM" />
<img width="20" />
<img src="https://cdn.simpleicons.org/swiper/6332F6" width="50" height="50" alt="Swiper" />
<img width="20" />
<img src="https://cdn.simpleicons.org/lucide/FF6B6B" width="50" height="50" alt="Lucide React" />

</div>

- **Next.js** - Framework React para produção com renderização do lado do servidor
- **React** - Biblioteca JavaScript para construção de interfaces de usuário
- **React DOM** - Renderizador DOM para React
- **Swiper** - Biblioteca moderna de carrossel/touch slider
- **Lucide React** - Biblioteca de ícones SVG para React
- **Tabler Icons** - Conjunto de ícones SVG gratuitos e open-source

<div align="center">

### 🛠️ Dependências de Desenvolvimento

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" height="50" alt="TypeScript" />
<img width="20" />
<img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="50" height="50" alt="Tailwind CSS" />
<img width="20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="50" height="50" alt="ESLint" />
<img width="20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="50" height="50" alt="ESLint Config Next" />
<img width="20" />
<img src="https://cdn.simpleicons.org/prettier/F7B93E" width="50" height="50" alt="Prettier" />
<img width="20" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="50" height="50" alt="Git" />
</div>

- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **ESLint** - Ferramenta de linting para JavaScript/TypeScript
- **ESLint Config Next** - Configuração ESLint otimizada para Next.js
- **Prettier Plugin Tailwind** - Plugin Prettier para ordenação de classes Tailwind

</div>

---

## 🏗️ Arquitetura e Padrões de Projeto

### 🎯 Padrões Implementados

#### 1. **Component-Based Architecture**

- Arquitetura baseada em componentes reutilizáveis
- Separação clara de responsabilidades
- Componentes pequenos e focados em uma única funcionalidade

#### 2. **Widget Pattern**

- Organização de componentes complexos em widgets
- Widgets localizados em `src/widgets/`
- Facilita a manutenção e escalabilidade

#### 3. **TypeScript Strict Mode**

- Tipagem estática rigorosa
- Interfaces e tipos definidos em `src/types/`
- Reduz erros em tempo de execução

#### 4. **Path Aliases**

- Uso de aliases de caminho (`@/*`) para imports mais limpos
- Configurado no `tsconfig.json`
- Melhora a legibilidade do código

#### 5. **Client/Server Components**

- Uso estratégico de Client Components (`"use client"`)
- Server Components por padrão no Next.js 13+
- Otimização de performance e bundle size

#### 6. **Responsive Design**

- Design mobile-first com Tailwind CSS
- Breakpoints responsivos (md, lg, xl)
- Grid adaptativo para diferentes tamanhos de tela

#### 7. **Separation of Concerns**

- **Components**: Componentes reutilizáveis
- **Widgets**: Componentes complexos/composições
- **Utils**: Funções utilitárias e lógica de negócio
- **Assets**: Dados e recursos estáticos
- **Types**: Definições de tipos TypeScript

---

## 📁 Estrutura do Projeto

```
projeto-airbnb/
├── public/                 # Arquivos estáticos
│   ├── *.svg              # Ícones e imagens SVG
│
├── src/
│   ├── app/               # App Router do Next.js
│   │   ├── [slug]/       # Rota dinâmica para detalhes
│   │   ├── layout.tsx    # Layout raiz
│   │   ├── page.tsx      # Página inicial
│   │   └── globals.css   # Estilos globais
│   │
│   ├── assets/           # Dados e recursos
│   │   ├── accommodations.ts
│   │   ├── defaultVariables.ts
│   │   └── icons.ts
│   │
│   ├── components/       # Componentes reutilizáveis
│   │   ├── AccommodationCard.tsx
│   │   ├── AccommodationDesc.tsx
│   │   ├── Badge.tsx
│   │   ├── FilterButton.tsx
│   │   └── ...
│   │
│   ├── widgets/          # Widgets complexos
│   │   ├── Accommodations.tsx
│   │   ├── AccommodationDetails.tsx
│   │   ├── HorizontalNav.tsx
│   │   ├── SearchBar.tsx
│   │   └── ...
│   │
│   ├── types/            # Definições TypeScript
│   │   ├── assets.types.ts
│   │   ├── components.types.ts
│   │   └── utils.types.ts
│   │
│   └── utils/            # Funções utilitárias
│       └── api.ts
│
├── next.config.ts        # Configuração do Next.js
├── tsconfig.json        # Configuração do TypeScript
├── tailwind.config.js   # Configuração do Tailwind
└── package.json         # Dependências do projeto
```

---

## ⚙️ Como Executar

### 📋 Pré-requisitos

- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### 🚀 Instalação e Execução

1. **Clone o repositório**

```bash
git clone https://github.com/joaogabrieldev/projeto-airbnb.git
cd projeto-airbnb
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse a aplicação**

```
http://localhost:3000
```

### 🛠️ Scripts Disponíveis

| Script          | Descrição                              |
| --------------- | -------------------------------------- |
| `npm run dev`   | Inicia o servidor de desenvolvimento   |
| `npm run build` | Cria build de produção                 |
| `npm run start` | Inicia o servidor de produção          |
| `npm run lint`  | Executa o ESLint para verificar código |

---

## 👨‍💻 Autor

<div align="center">

### João Gabriel R. Rocha

**Fullstack Developer**

[![GitHub](https://img.shields.io/badge/GitHub-joaogabrieldev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joaogabrieldev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-João_Gabriel-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joaogabrielrocha)

---

<div align="center">

**Desenvolvido com ❤️ usando Next.js, React e TypeScript**

![Made with](https://img.shields.io/badge/Made%20with-Next.js-black?style=flat-square&logo=next.js)
![Made with](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)
![Made with](https://img.shields.io/badge/Made%20with-TypeScript-3178C6?style=flat-square&logo=typescript)

</div>
