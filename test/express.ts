
import express = require('express');
import auth = require('basic-auth');

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    const credentials = auth(req);
    // => { name: 'something', pass: 'whatever' }
    console.log(credentials);
});
