# About

This is a Node.js server setup with Express, Mongoose and TypeScript.

TypeScript configuration can be found in `tsconfig.json` file.

Package `ts-node-dev` is used to automatically re-start the server when code changes.

## Code Refactoring

All route handlers are in `index.ts` file.

Controller functions are refactored into `controllers` folder.

For better setup that also refactors route, see branch refactor-setup-routes.

# Getting Started

## Installation

1. Install NPM packages

```sh
npm install
```

2. Start mongoDB
3. Run

```sh
npm run dev
```
