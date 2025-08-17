# Amigo Secreto - Sorteador Interativo

Uma aplicação web moderna e responsiva para organizar sorteios de amigo secreto de forma prática e divertida seguindo o desafio "Praticando Lógica de Programação: Challenge amigo secreto", do programa One - alura

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Começar](#como-começar)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Demonstração](#demonstração)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Sobre o Projeto

O **Amigo Secreto** é uma aplicação web desenvolvida para facilitar a organização de sorteios de amigo secreto. Com uma interface intuitiva e moderna, permite adicionar participantes, gerenciar a lista e realizar sorteios de forma totalmente digital.

### Principais Características

- **Design Moderno**: Interface limpa e atrativa
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Interativo**: Feedback visual em tempo real
- **Funcional**: Todas as operações CRUD para gerenciar participantes
- **Sorteio Aleatório**: Algoritmo de sorteio justo e imparcial

## Funcionalidades

### ➕ Gerenciamento de Participantes
- **Adicionar**: Digite nomes e adicione via botão ou tecla Enter
- **Editar**: Clique no ícone ✏️ para editar nomes diretamente na lista
- **Excluir**: Remova participantes com o ícone 🗑️
- **Validação**: Impede adição de nomes vazios com feedback visual

### 🎲 Sistema de Sorteio
- **Sorteio Aleatório**: Algoritmo que garante imparcialidade
- **Resultado Destacado**: Exibição visual do nome sorteado
- **Posições Fixas**: Layout estável sem deslocamentos indesejados

### 🔄 Controles Avançados
- **Reiniciar**: Limpe tudo e comece um novo sorteio
- **Feedback Visual**: Mensagens temporárias para guiar o usuário
- **Estados Visuais**: Diferentes estilos para cada ação

### 📱 Responsividade Completa
- **Desktop**: Layout otimizado para telas grandes
- **Tablet**: Adaptação para dispositivos médios
- **Mobile**: Interface touch-friendly para smartphones

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com Flexbox e variáveis CSS
- **JavaScript ES6+**: Lógica interativa e manipulação do DOM
- **Design Responsivo**: Media queries para todas as telas
- **Web Accessibility**: ARIA labels e navegação por teclado

## Como Começar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/aNdReLuizMe/challenge-amigo-secreto_pt-main.git
   ```

2. **Navegue até o diretório**
   ```bash
   cd challenge-amigo-secreto_pt-main
   ```

3. **Execute localmente**
   
   - Instale a extensão "Live Server"
   - Clique com botão direito em `index.html`
   - Selecione "Open with Live Server" ou o atalho "ALT+L ALT+O"

4. **Acesse no navegador**
   ```
   http://localhost:5500
   ```

### Execução Simples

Para uma execução rápida sem servidor, você pode simplesmente abrir o arquivo `index.html` diretamente no navegador, mas algumas funcionalidades poderão estar limitadas.

## Como Usar

### Passo a Passo

1. **📝 Adicione Participantes**
   - Digite o nome no campo de entrada
   - Pressione `Enter` ou clique no botão "Adicionar"
   - Repita para todos os participantes

2. **✏️ Gerencie a Lista**
   - **Editar**: Clique no ícone ✏️ ao lado do nome
   - **Excluir**: Clique no ícone 🗑️ para remover o nome inserido

3. **🎲 Execute o Sorteio**
   - Clique no botão "Sortear amigo"
   - O nome sorteado aparecerá destacado em verde
   - O botão "Reiniciar" ficará disponível

4. **🔄 Reinicie (Opcional)**
   - Clique em "Reiniciar" para limpar tudo
   - Comece um novo sorteio do zero

### Dicas de Uso

- **Mínimo de participantes**: Adicione pelo menos um nome antes de sortear
- **Sorteios múltiplos**: Você pode sortear quantas vezes quiser
- **Mobile**: Interface otimizada para uso em smartphones
- **Teclado**: Use `Enter` para adicionar nomes rapidamente

## 📁 Estrutura do Projeto

```
challenge-amigo-secreto_pt-main/
├── assets/
│   ├── amigo-secreto.png       # Imagem principal
│   └── play_circle_outline.png # Ícone do botão sortear
├── app.js                      # Lógica JavaScript
├── index.html                  # Estrutura HTML
├── style.css                   # Estilos CSS
└── README.md                   # Documentação
```

### Arquivos Principais

- **`index.html`**: Estrutura da página com elementos semânticos
- **`style.css`**: Estilos responsivos com variáveis CSS e media queries
- **`app.js`**: Funcionalidades interativas e gerenciamento de estado
- **`assets/`**: Recursos visuais (imagens e ícones)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**André Luiz** - [GitHub](https://github.com/aNdReLuizMe)

---

⭐ **Gostou do projeto?** Dê uma estrela no repositório!

📝 **Encontrou algum problema?** Abra uma [issue](https://github.com/aNdReLuizMe/challenge-amigo-secreto_pt-main/issues)

🚀 **Quer colaborar?** Envie um [pull request](https://github.com/aNdReLuizMe/challenge-amigo-secreto_pt-main/pulls)