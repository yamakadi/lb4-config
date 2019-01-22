import {Provider} from '@loopback/context';
import {Env} from "../env";

export class EnvProvider implements Provider<Env> {
    constructor() {}

    value(): Env {
        return new Env;
    }
}
