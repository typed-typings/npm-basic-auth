
import {IncomingMessage} from 'http';

declare class Credentials {
    name: string;
    pass: string;
}

/**
 * Get the basic auth credentials from the given request. The `Authorization`
 * header is parsed and if the header is invalid, `undefined` is returned,
 * otherwise an object with `name` and `pass` properties.
 */
declare function auth(req: IncomingMessage): Credentials;

export = auth;
