import {BindingKey} from "@loopback/context";
import {Config, Configuration} from "./config";
import {Env} from "./env";

/**
 * Binding keys used by this component.
 */
export namespace ConfigBindings {
    export const CONFIG = BindingKey.create<Config>(
        'config',
    );

    export const APP_CONFIGURATION = BindingKey.create<Configuration>(
        'config.configuration',
    );

    export const ENV = BindingKey.create<Env>(
        'config.env',
    );
}
