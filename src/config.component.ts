import {inject, Component, Binding, BindingScope} from '@loopback/core';
import {ConfigBindings} from "./keys";
import {Env} from "./env";
import {Config, Configuration} from "./config";

export class ConfigComponent implements Component {
    bindings?: Binding[];

    constructor(
        @inject(ConfigBindings.APP_CONFIGURATION)
        private configuration: Configuration,
    ) {
        this.bindings = [
            Binding.bind(ConfigBindings.ENV.key)
                .toClass(Env)
                .inScope(BindingScope.SINGLETON),
            Binding.bind(ConfigBindings.CONFIG.key)
                .toDynamicValue(() => new Config(this.configuration))
                .inScope(BindingScope.SINGLETON),
        ];
    }

}
