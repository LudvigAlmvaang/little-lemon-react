# Little Lemon -- React

## Table of Content

- [Introduction](#introduction)
- [Wireframe](#wireframe)
- [Prototype](#prototype)
- [Live Demo](#live-demo)
- [Installation](#installation)

## Introduction

This is my Capstone project for Meta Front-End Developer Professional Certificate; a Coursera specialization by Meta.
The primary tasks are to create a wireframe for the web app in Figma, then move on to making a prototype in Figma, then lastly to create the web app in React and make sure that the "reserve a table" function works.

## Wireframe

[See Figma Project](https://www.figma.com/file/rMigo5sfb9XEgWB9X1QGeJ/Capstone-project?type=design&node-id=0%3A1&mode=design&t=6ZzyyeuhaVgxAmig-1)

<details>

<summary>Show Wireframe 1</summary>

![wireframe-home](./readmeAssets/wireframe/HOME.png)

</details> <details>

<summary>Show Wireframe 2</summary>

![wireframe-reservations](./readmeAssets/wireframe/RESERVATION.png)

</details>

## Prototype

[See Figma Project](https://www.figma.com/file/rMigo5sfb9XEgWB9X1QGeJ/Capstone-project?type=design&node-id=51%3A169&mode=design&t=gdwTriMun9hFfETd-1)

<details>

<summary>Show Prototype 1</summary>

![wireframe-reservations](./readmeAssets/prototype/HOME.png)

</details> <details>

<summary>Show Prototype 2</summary>

![wireframe-reservations](./readmeAssets/prototype/RESERVATION.png)

</details>

## Live Demo

Coming soon!

## Installation

- Clone the repository
- Run `npm install`
- Run `npm run dev`

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
