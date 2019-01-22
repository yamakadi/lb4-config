import {Provider} from '@loopback/context';
import {inject} from '@loopback/core';
import {Config, Configuration} from "../config";
import {ConfigBindings} from "../keys";

export class ConfigProvider implements Provider<Config> {
    constructor(
        @inject(ConfigBindings.APP_CONFIGURATION)
        private configuration: Configuration,
    ) {
    }

    value(): Config {
        return new Config(this.configuration);
    }
}
