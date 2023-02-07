# Documentação em construção!!

# Api node express

Inicialização da criação de uma api em nodeJs, usando express. Ideia inicial para essa api é criar um sistema de login bem robusto, com algumas rodas de usuário.

<br>

> ## Libs usadas até o momento:

<br>

1. > [Express](https://expressjs.com/en/starter/installing.html)
2. > [Typescript](https://www.typescriptlang.org/docs/)
3. > [Prisma.io](https://www.prisma.io/docs/getting-started)
4. > [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
5. > [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)

<br>

### Modo de uso da api

<br>

Executar os comandos a seguir na ordem descrita!!

## Importante: "É necessario ter instalado o git e pacote npm!"

escolher um pasta de sua prefencia, abrir no seu promp de comando/cmd

<br>

```typescript
git clone https://github.com/gabrielrieff/apiNode-User
```

```typescript
cd apiNode-User
```

```typescript
npm install
```

na raiz do projeto criar um arquivo .env e colar o codigo abaixo.

```typescript
DATABASE_URL="file:./dev.db"
```

```typescript
npx prisma migrate dev;
```

```
ao executar esse comando ele ir pedir para nomear sua migrate, pode colocar o nome que achar melho.

Apos estes passos, acessar o o site MD5Hash(https://www.md5hashgenerator.com/)
gerar uma chave hash e colar na arquivo .env

"Exemplo"
JWT_SECRET=SuaChaveHash (é exencial usar o "JWT_SECRET" como key para a conecção com o banco de dados)

"Tudo pronto para uso."
Caso tenha tentar criar um novo usuario no seu banco de dados, pode executar o seguinte comando no terminal, esse comando ira abrir um gerenciador de banco de dados proprio do prisma.
```

```typescript
npx prisma studio
```

### Rotas existentes:

> http://localhost:3333/user

> http://localhost:3333/session

> http://localhost:3333/reset