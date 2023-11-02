# About

This is a Node.js server setup with Express, Mongoose and TypeScript.

TypeScript configuration can be found in `tsconfig.json` file.

Package `ts-node-dev` is used to automatically re-start the server when code changes.

## Code Refactoring

Only basic setup in `index.ts` file.

Controller functions are refactored into `controllers` folder.

Route handlers are refactored into `routers` folder.

For a complete setup with environment variables and path alias, see branch `ultimate-setup`.

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
