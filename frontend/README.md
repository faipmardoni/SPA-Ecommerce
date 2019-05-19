# FRONTEND

## Basic root project
```
.
├── src
|   ├── client
|   ├── server
|   └── shared
|       ├── components
|       ├── config
|       ├── helpers
|       ├── pages
|       ├── redux
|       ├── store
|       └── routes.js
```
---

## Getting started
- before run development (maybe you need set env variable to run this project)
  - copy `example.env` to `.env`
  - fill `.env` content, e.g:
    ```
    HOST=YOUR BACKEND SERVICE
    ```
  - install deps
    ```terminal
    ➜ yarn
    ```
---
# Scripts
### run development (local)
```terminal
➜ yarn start
```

### build docker image
- build command
  ```terminal
  ➜ docker build -t <name>:<tag> .
---