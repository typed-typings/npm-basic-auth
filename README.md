# Typed basic-auth
[![Build Status](https://travis-ci.org/types/npm-basic-auth.svg?branch=master)](https://travis-ci.org/types/npm-basic-auth)

Typescript Typings for [basic-auth](https://npmjs.org/package/basic-auth).

## Installation
```sh
typings install --save basic-auth
```

## Usage

```ts
import express = require('express');
import auth = require('basic-auth');

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    const credentials = auth(req);
    // => { name: 'something', pass: 'whatever' }
});
```

```ts
import {createServer, IncomingMessage, ServerResponse} from 'http';
import auth = require('basic-auth');

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const credentials = auth(req);

  if (!credentials || credentials.name !== 'john' || credentials.pass !== 'secret') {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="example"');
    res.end('Access denied');
  } else {
    res.end('Access granted');
  }
});

server.listen(3000);
```

[More examples](./test/test.ts)

## Contributing
You can run the tests by running `npm run build` and then `npm run test`.
