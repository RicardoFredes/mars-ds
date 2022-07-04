# Me Salva! MARS | Design System

![Me Salva! Mars](https://user-images.githubusercontent.com/29892001/147158290-0af5b26e-fa73-45a1-8e6f-44a1a56fad01.png)

![License](https://img.shields.io/static/v1?label=Licence&message=MIT&color=yellow)
![Coverage](https://img.shields.io/static/v1?label=Coverage&message=0%&color=red)
![Build](https://img.shields.io/static/v1?label=Build&message=Success&color=lemon)
![Version](https://img.shields.io/static/v1?label=Version&message=1.0.0-alpha.106&color=orange)

**Mars** é a nossa biblioteca de design system feita em React.js. Essa lib os principais componentes para os projetos do Me Salva!.

- [Documentação do MARS - Storybook](https://mars.mesalva.com)
- [Projeto visual - Figma](https://www.figma.com/file/W48LS2jmdbpQ8l9h7FRgit/Me-Salva!-Design-System?node-id=822%3A22408)

# Tabela de Conteúdo

- [Sobre](#sobre)
- [Tabela de Conteúdo](#tabela-de-conteudo)
- [Como usar](#como-usar)
- [Instalação](#instalacao)
  - [Pré-requisitos](#pre-requisitos)
  - [Organização dos arquivos](#organizacao-dos-arquivos)
- [Testes](#testes)
- [Publicação](#publicacao)
- [Tecnologias](#tecnologias)

![images_unsplash_com-photo-1573588028698-f4759befb09a](https://user-images.githubusercontent.com/29892001/145896670-23d7aef4-1ae5-44bf-8b8e-573c6e965b2f.png)

# Como usar <a name="como-usar"></a>

Para adicionar o Mars aos projetos, rode o seguinte comando:

```bash
$ yarn add @mesalva/mars
```

Importando um componente e usando um Tokens:

```tsx
import { Button, ButtonSizesEnum, Tokens } from "@mesalva/mars";

const MyExample = () => (
  <div style={{ backgroundColor: Tokens.ColorBackgroundNeutral }}>
    <Button size={ButtonSizesEnum.Small}>Comece agora!</Button>
  </div>
);

export default MyExample;
```

# Instalação <a name="instalacao"></a>

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

## Pre-requisitos <a name="pre-requisitos"></a>

- Git
- Node.js >= 14 <= 16 (Recomendado)
- Yarn >= 1 <= 2

Os seguintes padrões foram adotados e devem ser seguidos:

- [Conventional Commits](https://www.conventionalcommits.org)
- [BEM](https://en.bem.info/methodology/quick-start/)

## Organização dos arquivos <a name="organizacao-dos-arquivos"></a>

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

# Testes <a name="testes"></a>

## Testes unitários e funcionais

Os testes da aplicação usam o [RTL (React Testing Library)](https://testing-library.com/docs/react-testing-library), que trabalham em conjunto com o [Jest](https://jestjs.io/pt-BR/) e o [React Test Utils](https://reactjs.org/docs/test-utils.html).

Os arquivos de testes unitários devem seguir a extensão `.spec.ts`, enquanto os testes funcionais de componentes devem seguir a seguinte extensão `.test.tsx`.

```bash
# Rodando os testes
$ yarn test

# Rodando os testes com watch
$ yarn test:watch

# Rodando os testes com coverage
$ yarn test:coverage
```

## Testes re regressão visual

Para fazer a regressão visual a aplicação usa o [Loki](https://loki.js.org/), que faz um teste de comparação entre imagens.

Antes de rodar os testes é necessário rodar a aplicação:

```bash
# Rodando a aplicação antes dos testes
$ yarn storybook
```

Em outro terminal rode os testes ou, em caso de alteração visual em algum componente, faça a atualização das imagens de referência.

```bash
# Roda os testes localmente e atualiza as imagens que mudaram
$ yarn test:visual

# Aprova as mudanças nas imagens/componentes e atualiza as referências
$ yarn test:visual:approve

# ATENÇÃO: Evite usar esse comando
# Atualizando todas imagens de referência
$ yarn test:visual:update
```

```bash
📂.loki # diretório do loki
 ┣ 📂current # imagens geradas durante o teste
 ┣ 📂difference # imagens geradas para os testes que falharam
 ┗ 📂reference # imagens de referência
```

### Exemplo de teste visual com falha

Imagem de referência:

![chrome_iphone7_Components_Button_Default](https://user-images.githubusercontent.com/29892001/147115992-9f9fcfb4-23d7-490c-bb47-e7156ccc150a.png)

Simulação de componente com erros:

![chrome_iphone7_Components_Button_Default](https://user-images.githubusercontent.com/29892001/147126776-d1762a57-2614-4fcc-b60a-b9fea12d0796.png)

Teste falhando e apresentando as diferenças:

![chrome_iphone7_Components_Button_Default](https://user-images.githubusercontent.com/29892001/147126714-9abfa301-658d-478e-ad34-a42376623118.png)

### Referências

- https://github.com/mapbox/pixelmatch
- https://github.com/gemini-testing/looks-same

# Publicação <a name="publicacao"></a>

:warning: Em construção

A publicação do projeto está sendo feita em alpha toda a vez que um PR é mesclado no branch `alpha`.
A geração de tags e publicação é realizado com base no semantic realease, assim como a atualização da documentação contendo a versão mais recente do modulo.

# Tecnologias <a name="tecnologias"></a>

- [Jest](https://jestjs.io/pt-BR/)
- [Loki](https://loki.js.org/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [RTL (React Testing Library)](https://testing-library.com/docs/react-testing-library)
- [Sass](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
