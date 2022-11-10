
# Bem vindo ao projeto Trybetunes!
Este é um projeto que foi desenvolvido durante o curso de Desenvolvimento Web na Trybe.

## Habilidades Desenvolvidas

  - Consumir dados vindos de uma API;

  - Utilizar os ciclos de vida de um componente React;

  - Utilizar a função setState;

  - Criar rotas utilizando os componentes BrowserRouter, Switch e Route corretamente;

## Funções
Neste projeto foi desenvolvido um site que busca artistas e retorna seus álbuns, permitindo o usuário visualizar as informações sobre o álbum, executar uma prévia de cada música e a favoritar.

## Desenvolvimento
### Antes de começar a desenvolver
1. Clone o repositório

  * `git clone git@github.com:mabiiak/trybetunes.git`.

  * Entre na pasta do repositório que você acabou de clonar:

    * `cd trybetunes`

2. Instale as dependências e inicialize o projeto

  * Instale as dependências:

    * `npm install`

3. Crie uma branch a partir da branch `mabiane-trybetumes`

  * Verifique que você está na branch `mabiane-trybetunes`

    * Exemplo: `git branch`

  * Se não estiver, mude para a branch `mabiane-trybetumes`

    * Exemplo: `git checkout mabiane-car-shop`

  * Agora, crie uma branch onde você vai guardar os commits do seu projeto

  ### Rotas
  - a rota `/` deve renderizar um componente chamado `Login`. Este componente deve ter uma `div` com o atributo `data-testid="page-login"` que envolva todo seu conteúdo;

  - a rota `/search` deve renderizar um componente chamado `Search`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-search"`;

  - a rota `/album/:id` deve renderizar um componente chamado `Album`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-album"`;

  - a rota `/favorites` deve renderizar um componente chamado `Favorites`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-favorites"`;

  - a rota `/profile` deve renderizar um componente chamado `Profile`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-profile"`;

  - a rota `/profile/edit` deve renderizar um componente chamado `ProfileEdit`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-profile-edit"`;

  - para qualquer outra rota não mapeada, deve ser renderizado um componente chamado `NotFound`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-not-found"`;

  ## Requisitos do projeto

    ✅ 1. Crie as rotas necessárias para a aplicação

    ✅ 2. Crie um formulário para identificação
  
    ✅ 3. Crie um componente de cabeçalho 

    ✅ 4. Crie os links de navegação no cabeçalho

    ✅ 5. Crie o formulário para pesquisar artistas
Este formulário deve conter um input e um botão para que seja possível pesquisar os álbums de uma banda ou artista. Crie o formulário dentro do componente `Search`, que é renderizado na rota `/search`.

    ✅ 6. Faça a requisição para pesquisar artistas
Com a estrutura da tela de pesquisa criada, agora é hora de fazer uma requisição e receber a lista de álbums da banda ou artista pesquisada.

    ✅ 7. Crie a lista de músicas do álbum selecionado

    ✅ 8. Crie o mecanismo para adicionar músicas na lista de músicas favoritas

    ✅ 9. Faça a requisição para recuperar as músicas favoritas ao entrar na página do Álbum

    ✅ 10. Faça a requisição para recuperar as músicas favoritas e atualizar a lista após favoritar uma música

    ✅ 11. Crie o mecanismo para remover músicas na lista de músicas favoritas

### Requisitos bônus

    ✅ 12. Crie a lista de músicas favoritas

    ✅ 13. Crie a exibição de perfil

    ✅ 14. Crie o formulário de edição de perfil
Crie o formulário de edição de perfil dentro do componente `ProfileEdit`, que é renderizado na rota `/profile/edit`.

---

Obrigada pela visita! Feedbacks são bem vindos
