# MARS Design System

![images_unsplash_com-photo-1573588028698-f4759befb09a](https://user-images.githubusercontent.com/29892001/145896670-23d7aef4-1ae5-44bf-8b8e-573c6e965b2f.png)

![License](https://img.shields.io/static/v1?label=Licence&message=MIT&color=yellow)
![Coverage](https://img.shields.io/static/v1?label=Coverage&message=0%&color=red)
![Build](https://img.shields.io/static/v1?label=Build&message=Success&color=lemon)
![Version](https://img.shields.io/static/v1?label=Version&message=1.0.0.alpha-2&color=orange)

**Mars** é a nossa biblioteca de design system feita em React.js. Essa lib os principais componentes para os projetos do Me Salva!.

- [Documentação do MARS - Storybook](https://mars.mesalva.com)
- [Projeto visual - Figma](https://www.figma.com/file/W48LS2jmdbpQ8l9h7FRgit/Me-Salva!-Design-System?node-id=822%3A22408)

# Tabela de Conteúdo

- [Sobre](#Sobre)
- [Tabela de Conteúdo](#tabela-de-conteudo)
- [Instalação](#instalacao)
- [Como usar](#como-usar)
  - [Pré-requisitos](#pre-requisitos)
  - [Local files](#local-files)
- [Tests](#testes)
- [Publicação](#publicacao)
- [Tecnologias](#tecnologias)

# Instalação

Para rodar o projeto você precisa clonar a aplicação em usa máquina:

```bash
# Clone este repositório
$ git clone git@github.com:mesalva/mars.git

# Acesse a pasta do projeto no terminal/cmd
$ cd mars

# Instale as dependências
$ yarn

# Execute o Storybook da aplicação
$ yarn storybook

# A aplicação inciará na porta:6006 e abrirá automáticamente em <http://localhost:6006>
```

# Como usar

Aqui jás um overview de algumas decisões arquitetonicas e padrões do projeto.

## Pre-requisitos

- Git
- Node.js >= 14 <= 16 (Recomendado)
- Yarn >= 1 <= 2

Os seguintes padrões foram adotados e devem ser seguidos:

- [Conventional Commits](https://www.conventionalcommits.org)
- [BEM](https://en.bem.info/methodology/quick-start/)

## Local files

O projeto está organizado da seguinte maneira:

```bash
📂src
 ┣ 📂components # contém os componentes organizados por grupos
 ┃ ┣ 📂basics
 ┃ ┣ 📂forms
 ┃ ┣ 📂typographics
 ┣ 📂services # métodos e helpers
 ┣ 📂styles # estilos dos componentes e import de variáveis e tokens
 ┃ ┣ 📜components.scss
 ┃ ┣ 📜index.scss
 ┃ ┗ 📜reset.scss
 ┣ 📂tokens # tokens do projeto
 ┃ ┣ 📂jsons # tokens exportado do Figma
 ┃ ┣ 📂scss
 ┃ ┣ 📜index.js
 ┃ ┗ 📜index.ts # tokens em JS
 ┣ 📂types # tipo gerais usados nos componentes
 ┗ 📜index.ts # arquivo que exporta todos os componentes
```

## Como criar um novo componente

Um componente dentro do projeto deve seguir extritamente a seguinte organização:

```bash
📂 Button # diretório deve seguir o padrão CamelCase
 ┣ 📜button.component.tsx # componente react
 ┣ 📜button.types.ts # contém todos os tipos do componente
 ┣ 📜button.test.ts # teste unitário
 ┣ 📜button.stories.tsx # contém a documentação do componente
 ┣ 📜button.module.scss # contém os estilos no padrão BEM
 ┗ 📜index.ts # exporta o componente como default
```

Além disso todos os componentes devem ser importados dentro do arquivo `src/index.ts`, assim como o arquivo `.scss` deve ser importado dentro do arquivo `src/styles/components.scss`.

### Muita coisa para lembrar né?

Por isso foi criado um script para te ajudar nesse passo. Para isso basta ir para o terminar e digitar os seguintes comandos:

```bash
# Script para gerar criar novo componente
$ yarn new-component

# Qual o nome do componente?
# Informar a pasta e o nome em kebab-case
$ [diretorio-dentro-de-src]/[nome-do-component]

# Confirmar a criação? [*/N]
$

# Done: components reindex
# Done: styles reindex
# Success
```

Pronto agora o componente foi criado e registrado dentro os arquivos de styles e componentes.

## Como fazer a indexação automática

:warning: incompleto

```bash
# Script para atualizar os arquivos scss e index.ts
$ yarn reindex
```

## Atualizando os tokens

:warning: incompleto

Os arquivos que geram os tokens são oriundos do Figma e são exportados no formato JSON. De modo geral existem três arquivos de temas dentro do diretório `src/tokens/jsons`:

- base.json
- dark.json
- light.json

O arquivo `base.json` é o que contém todos os tokens da aplicação com os valores padrões, normalmente é o tema light. O arquivo `dark.json` contém somente os tokens que irão sobrescrever os tokens padrões. Já o arquivo `light.json`, fica vazio, já que ele é a base.

Após atualizar os tokens é necessário rodar o seguinte script no terminal:

```bash
# Script para gerar automaticamente os tokens
$ yarn tokens-generator
```

# Testes

:warning: Em construção

```bash
# Rodando os testes
$ yarn test
```

# Publicação

:warning: Em construção

# Tecnologias

- [Jest](https://jestjs.io/pt-BR/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
