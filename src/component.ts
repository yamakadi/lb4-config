import {Component, ProviderMap} from '@loopback/core';
import {ConfigBindings} from "./keys";
import {ConfigProvider, EnvProvider} from "./providers";

export class ConfigComponent implements Component {
  providers?: ProviderMap = {
    [ConfigBindings.CONFIG.key]: ConfigProvider,
    [ConfigBindings.ENV.key]: EnvProvider,
  };
}
