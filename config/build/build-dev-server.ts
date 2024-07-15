import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import path from 'path';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    hot: true,
    static: {
      directory: options.paths.build,
    },
    historyApiFallback: true,
  };
}
