import webpack from 'webpack';
import { buildDevServer } from './index.devserver';
import { buildLoaders } from './index.loaders';
import { buildPlugins } from './index.plugins';
import { buildResolvers } from './index.resolvers';
import { BuildOptions } from './types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;
    const isDev = mode === 'development';

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        devtool: isDev ? 'inline-source-map' : false,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devServer: buildDevServer(options),
    };
}

export * from './types';
