<div align="center">

<img src="https://github.com/user-attachments/assets/a28b067f-14f8-4da9-83a4-6d8950c34b70" width="200"/>

# 🌱♻️ GreenTech - Frontend

> Interface inteligente para Gerencimanto do reuso, descarte e Economia Circular do lixo eletronico.

</div>

---

## 🚀 Sobre o Projeto

Este é o repositório do **Frontend do GreenTech**, uma aplicação web moderna desenvolvida para ser a interface intuitiva do nosso sistema de gerenciamento de ciclo de vida de equipamentos tecnológicos. 

Enquanto o Back-end processa as regras de negócio, o **GreenTech-Front** oferece uma experiência "Clean & Green", para que empresas gerenciem a logística reversa, reuso e descarte certificado de hardware em desuso.

---

## 🌍 Propósito do Frontend

> **Redefinindo a experiência de gestão ambiental.**
> **Convertendo complexidade logística em uma interface intuitiva e responsiva para o clima.**

---

## 🎯 Objetivos da Interface

- 📱 **Responsividade Global:** Acesso perfeito via Desktop, Tablet ou Smartphone (Técnicos em campo ou Gestores).
- 🔐 **Controle de Acesso (RBAC):** Separação clara entre o que um Gestor Admin vê e o que um Cliente vê.
- ✨ **UX Intuitiva:** Design minimalista para agilizar o cadastro e triagem de equipamentos.
- 📊 **Visualização de Impacto:** Dashboards claros para relatórios de ESG e economia de CO₂.
- 📄 **Gestão de Certificados:** Facilidade para download de Certificados de Destruição Segura.

---

## 🧠 Funcionalidades Implementadas

- 👤 **Login e Autenticação Segura:** Integração com JWT do Back-end.
- 🚧 **Rotas Protegidas:** Middlewares que garantem que apenas Admins acessem o gerenciamento.
- 📦 **Formulários Dinâmicos:** Cadastro e edição de equipamentos (usando React Hook Form).
- ♻️ **Triagem de Hardware:** Interface para atualizar o status do item (reuso/descarte).
- 🔔 **Notificações em Tempo Real:** Feedback visual de sucesso ou erro (react-hot-toast).
- 📋 **Listagem Inteligente:** Filtros para buscar equipamentos por tipo, status ou cliente.

---

## ⚙️ Tecnologias e Bibliotecas

### 💻 Core
<img src="https://skillicons.dev/icons?i=react,ts,vite" alt="React, TypeScript, Vite" />

### 🎨 Estilização & Responsividade
<img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" />

### 🛠️ Bibliotecas Essenciais

| Biblioteca | Funcionalidade | Ícone |
| :--- | :--- | :--- |
| **React Router** | Navegação e Proteção de Rotas | <img src="https://img.shields.io/badge/Router-Navigation-CA4245?style=for-the-badge&logo=react-router" /> |
| **Axios** | Comunicação com a API (Back-end) | <img src="https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?style=for-the-badge" /> |
| **React Hook Form** | Formulários de Alta Performance | <img src="https://img.shields.io/badge/Form-Handling-EC5990?style=for-the-badge&logo=react-hook-form" /> |
| **Lucide React** | Ícones Modernos e Leves | <img src="https://img.shields.io/badge/Lucide-Icons-F97316?style=for-the-badge" /> |
| **React Hot Toast** | Notificações de Feedback | <img src="https://img.shields.io/badge/Toast-Notifications-f43f5e?style=for-the-badge" /> |

---

## 🏗️ Arquitetura do Frontend

O projeto segue uma estrutura modular focada em escalabilidade e manutenção (TypeScript):

- `src/components`: Componentes reutilizáveis (Botões, Inputs, Sidebar).
- `src/contexts`: Gerenciamento de estado global (Autenticação).
- `src/hooks`: Lógicas personalizadas reaproveitáveis (useAuth, useApi).
- `src/models`: Interfaces TypeScript espelhadas das entidades do Back-end.
- `src/pages`: As telas completas da aplicação (Login, Dashboard).
- `src/routes`: Configuração do React Router e middlewares de proteção.
- `src/services`: Configuração do Axios para consumo da API (`Service.ts`).
- `src/styles`: Configurações globais do Tailwind CSS (`index.css`).

---

## 📦 Como rodar o projeto

```bash
# 1. Clone o repositório
git clone https://github.com/ON-ToMany/Sistema-de-CRM-Front.git

# 2. Entre na pasta
cd Sistema-de-CRM-Front

# 3. Instale as dependências
npm install

# 4. Configure a URL do Back-end no arquivo src/services/Service.ts

# 5. Rode o projeto em modo de desenvolvimento
npm run dev
