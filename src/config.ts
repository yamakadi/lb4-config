import {get, mergeWith, set, MergeWithCustomizer} from 'lodash'

export interface Configuration {
    [key: string]: unknown;
}

export class Config {

    private readonly config: Configuration;

    constructor(configuration: Configuration) {
        this.config = configuration;
    }

    get(key: string, defaultValue: unknown): unknown {
        return get(this.config, key, defaultValue)
    }

    merge(key: string, defaultValues: Configuration, customizer: MergeWithCustomizer): Configuration {
        const value = this.get(key, {});

        return mergeWith(defaultValues, value, customizer)
    }

    set(key: string, value: unknown): void {
        set(this.config, key, value)
    }
}
