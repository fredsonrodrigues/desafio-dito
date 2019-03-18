# Skeleton REACT + REDUX 2.0

Skeleton feito para facilitar a criação de apps com react usando redux. Essa versão utiliza o conceito de Hooks do React, [Clique aqui](https://reactjs.org/docs/hooks-intro.html) para conhecê-lo.

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

## Estrutura de diretórios

A estrutura de diretórios deste Skeleton, segue o seguinte padrão:

```
skeleton-react-redux-2.0
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── README.md
├── src
│    ├── __tests__
│    |    |
│    |    └── App.test.js
│    ├── Actions
│    │    ├── actionTypes.js
│    │    ├── appActions.js
│    │    └── index.js
│    ├── Assets
│    │    ├── css
|    |    |   ├── index.css
|    |    |   └── App.css
│    │    └── img
|    |        ├── logo.svg
│    ├── Components
│    │    ├── shared
|    |    |   └── Logo.js
│    │    └── index.js
│    ├── Pages
│    ├── Reducers
│    │    ├── appReducer.js
│    │    └── index.js
│    ├── Store
│    │    └── index.js
│    ├── App.js
│    ├── index.js
│    └── serviceWorker.js
```

Dentro de `src` os diretórios possuem as seguintes definições:

- **Actions**: a pasta actions contém todas as ações da sua aplicação, e elas podem ser separadas baseadas - nas rotas que você usa, ou até mesmo por responsabilidades que suas ações terão.
- **Components**: mantém os arquivos de componentes da aplicação.
- **Reducers**: contém as definições de estado que serão utilizados dentro da aplicação.
- **Store**: Contém a configuração inicial do Redux e do seu middleware.
- **Pages**: Contém os páginas que serão carregadas pelas rotas da aplicação.
- __**__tests__**_: diretório que contém a estrutura de testes.
## Instruções:

```sh
git clone git@github.com:devsceuma/skeleton-react-redux-2.0.git
cd skeleton-react-redux-2.0
npm install
npm start
```
