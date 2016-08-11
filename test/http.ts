
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
