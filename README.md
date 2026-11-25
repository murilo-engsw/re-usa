# ReUsa 🌱

**Consumo consciente, futuro sustentável.**

O ReUsa é um projeto acadêmico desenvolvido para a disciplina de Programação Web Front-end. Seu objetivo é incentivar o consumo consciente e a reutilização de objetos por meio de uma página web que reúne plataformas externas especializadas em produtos usados e seminovos.

A proposta é facilitar o acesso a alternativas mais sustentáveis de consumo, ajudando os usuários a encontrar lugares onde possam comprar, vender ou encontrar objetos que merecem uma nova oportunidade.

## 🎯 Objetivo do projeto

Incentivar a reutilização de objetos e contribuir para a redução do desperdício, tornando mais acessível a descoberta de plataformas que promovem práticas de consumo consciente.

O projeto está alinhado ao **Objetivo de Desenvolvimento Sustentável 12 (ODS 12) da ONU**, que busca assegurar padrões de produção e de consumo responsáveis.

## 💡 Como funciona?

O ReUsa funciona como um guia de plataformas externas. Em vez de implementar um sistema próprio de anúncios, doações ou trocas, o site direciona os usuários para serviços que já oferecem essas possibilidades.

O site apresenta cinco categorias principais:

- **Roupas:** acesso a plataformas de compra e venda de roupas usadas.
- **Livros:** acesso a sites especializados em livros usados e seminovos.
- **Móveis:** acesso a plataformas para encontrar móveis usados.
- **Eletrônicos:** acesso a serviços de compra e venda de aparelhos eletrônicos.
- **Calçados:** acesso a plataformas para encontrar calçados usados.

Cada categoria apresenta uma imagem, uma breve descrição e um link para uma plataforma relacionada.

## 🛠️ Área administrativa (Projeto 2)

Na segunda etapa da disciplina, o site ganhou a página **Adm** (`adm.html`), acessada pelo item "Adm" no menu da página principal. Nela é possível gerenciar o cadastro de usuários da aplicação, com os dados salvos no próprio navegador por meio do **Local Storage**.

Funcionalidades:

- **Cadastrar:** o formulário recebe nome e e-mail; cada cadastro aparece em uma lista logo abaixo do formulário, com a data de envio, o nome e o e-mail.
- **Limpar:** esvazia os campos do formulário.
- **Excluir um usuário:** cada item da lista tem um botão "Excluir", que pede confirmação e remove o usuário da lista e do Local Storage.
- **Excluir todos:** pede confirmação e remove todos os usuários da lista e do Local Storage.
- **Pesquisar:** filtra a lista enquanto o usuário digita, mostrando apenas os itens cujo nome ou e-mail contém o termo buscado (sem diferenciar maiúsculas de minúsculas).

### Como os dados são armazenados

Todos os cadastros ficam em **uma única chave** do Local Storage, `reusa-usuarios`, que guarda um array em formato JSON:

```json
[
  {
    "id": 1764095400000,
    "data": "25/11/2026, 15:10:00",
    "nome": "Ana Souza",
    "email": "ana@email.com"
  }
]
```

O `id` é gerado com `Date.now()` e serve para identificar qual usuário excluir, mesmo quando a lista está filtrada pela pesquisa.

### Organização do código (`js/adm.js`)

| Função / evento | Responsabilidade |
|---|---|
| `carregar()` | Lê a chave do Local Storage e converte o JSON em array (`JSON.parse`). |
| `salvar(usuarios)` | Converte o array em JSON (`JSON.stringify`) e grava na chave. |
| `renderizar(usuarios)` | Recria a lista `<ul>` com a API DOM (`createElement`, `appendChild`), incluindo o botão "Excluir" de cada item. |
| `filtrar(usuarios)` | Aplica o termo da pesquisa sobre nome e e-mail. |
| `excluirItem(id)` | Confirma com o usuário e remove o item pelo `id`. |
| Evento `submit` do formulário | Monta o objeto do novo usuário, salva e atualiza a lista. |
| Eventos dos botões e da pesquisa | Limpar campos, excluir todos e pesquisar em tempo real. |

## 🖥️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando tecnologias fundamentais para a criação de páginas web:

- **HTML5:** estruturação semântica e organização do conteúdo.
- **CSS3:** estilização dos elementos, definição da identidade visual e responsividade.
- **JavaScript (puro):** manipulação da página com a **API DOM** e armazenamento local com a **API Web Storage** (Local Storage), sem bibliotecas ou frameworks.
- **Google Fonts:** utilização das fontes Lato e Playfair Display.
- **Material Icons:** inclusão de ícones para aprimorar a comunicação visual.

## 🎨 Identidade visual

A identidade visual do ReUsa foi desenvolvida para transmitir simplicidade, elegância e conexão com a sustentabilidade.

A paleta de cores utiliza tons neutros e terrosos:

| Cor | Código | Aplicação |
|---|---|---|
| Branco | `#FFFFFF` | Fundos e cartões |
| Creme | `#F5F0E8` | Fundos de seções |
| Marrom | `#4B2E2B` | Textos, botões e rodapé |
| Marrom-claro | `#795548` | Destaques e elementos secundários |

**Tipografia:**

- **Playfair Display:** utilizada nos títulos.
- **Lato:** utilizada nos textos e demais elementos da interface.

## 📁 Estrutura do projeto

```text
projeto/
├── curriculos/
│   ├── akira/
│   ├── murilo/
│   └── rafael/
├── js/
│   └── adm.js
├── styles/
│   ├── adm.css
│   ├── form.css
│   └── principal.css
├── adm.html
├── index.html
├── login.html
├── principal.html
└── style.css
```

## 🌐 Acesse o projeto

- Página de entrada (cadastro e login): https://murilo-engsw.github.io/re-usa/
- Página principal: https://murilo-engsw.github.io/re-usa/principal.html
- Área administrativa: https://murilo-engsw.github.io/re-usa/adm.html

## 👥 Integrantes

- **Murilo Silva**
- **Matheus Akira**
- **Rafael Henrique**

## 📚 Contexto acadêmico

Projeto desenvolvido como atividade acadêmica da disciplina de **Programação Web Front-end**, em duas etapas:

- **Projeto 1 (HTML e CSS):** construção do layout e das páginas informativas do site.
- **Projeto 2 (JavaScript):** criação da área administrativa, com informações geradas dinamicamente pela API DOM e armazenadas no navegador com a API Web Storage.

O trabalho busca demonstrar como uma interface simples pode contribuir para a divulgação de alternativas sustentáveis e para a conscientização sobre o consumo responsável.
