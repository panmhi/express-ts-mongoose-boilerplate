# About

This is the ultimate Node.js server setup with Express, Mongoose and TypeScript.

TypeScript configuration can be found in `tsconfig.json` file.

Package `ts-node-dev` is used to automatically re-start the server when code changes.

Package `dovenv` is needed to access envirnoment variables.

## Code Refactoring

### index.ts

Initialize Express server and MongoDB in `index.ts` file.

### Controllers

Controller functions are refactored into `controllers` folder.

### Routers

Route handlers are refactored into `routers` folder.

### Environment variables

Environment variables are extraced in `utils/variables.ts` file.

### Path alias

A path alias is setup in the `tsconfig.jons` file: `./src/*` is configured as `@/`.

# Getting Started

## Installation

1. Install NPM packages

```sh
npm install
```

2. Start mongoDB
3. Add `.env` file in the root directory

```sh
MONGO_URI=mongodb://127.0.0.1:27017/note-app
PORT=8000
```

3. Run

```sh
npm run dev
```
