# Keycloak integration with a React app

## Prerequisites
- Keycloak installed
  - https://www.keycloak.org/getting-started/getting-started-docker 
  - ```bash
    docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:23.0.4 start-dev
    ```
  - Create a realm: myrealm
  - Create a client: myclient
    - set **Web origins**: http://localhost:5173
    - set **Valid redirect URIs**: http://localhost:5173/*
    - set **Valid post logout redirect URIs**: +
    - set **Web origins**: http://localhost:5173
  - Create a user: myuser
    - set **Email verified**: YES
    - Create Credentials 
      - Set password
      - **Temporary**: Off

## Dependencies
- https://github.com/react-keycloak/react-keycloak/blob/master/packages/web/README.md

## Install

- git clone
- npm install
- npm run dev
- open browser page: http://localhost:5173/

:information_source: Below is standard Readme from npm create vite app 

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
