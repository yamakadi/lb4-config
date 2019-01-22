import {BindingKey} from "@loopback/context";
import {Config, Configuration} from "./config";
import {Env} from "./env";

/**
 * Binding keys used by this component.
 */
export namespace ConfigBindings {
    export const CONFIG = BindingKey.create<Config>(
        'lb4-config.config',
    );

    export const APP_CONFIGURATION = BindingKey.create<Configuration>(
        'lb4-config.configuration',
    );

    export const ENV = BindingKey.create<Env>(
        'lb4-config.env',
    );
}
