import {config as dotEnv, DotenvParseOutput} from 'dotenv';
import {each, isUndefined, get, set} from 'lodash';

export interface EnvConfiguration {
    [name: string]: string;
}

export class Env {
    private readonly env: EnvConfiguration;

    constructor() {
        this.env = this.parseEnvVariables();
        this.load();
    }

    get(key: string, defaultValue?: string): string {
        return get(process.env, key, defaultValue)
    }

    getOrFail(key: string): string {
        const value = get(process.env, key);

        if (isUndefined(value)) {
            throw new Error(`Missing env key: ${key}`);
        }

        return value;
    }

    set(key: string, value: string): void {
        set(process.env, key, value)
    }

    private load(overwrite: boolean = true): void {
        each(this.env, (value, key) => {
            if (process.env[key] === undefined || overwrite) {
                process.env[key] = this.interpolate(value, this.env);
            }
        })
    }

    private interpolate(value: string, configuration: EnvConfiguration): string {
        const matches = value.match(/\$([a-zA-Z0-9_]+)|\${([a-zA-Z0-9_]+)}/g) || [];

        each(matches, (match) => {
            const key = match.replace(/[${}]/g, '');
            const variable = configuration[key] || process.env[key] || '';
            value = value.replace(match, this.interpolate(variable, configuration));
        });

        return value;
    }

    private parseEnvVariables(): DotenvParseOutput {
        const env = dotEnv();

        if (env.error && process.env.ENV_SILENT !== 'true') {
            throw env.error
        }

        if (env.error) {
            return {}
        }

        return env.parsed;
    }


}
