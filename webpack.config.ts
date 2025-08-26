import path from 'path';
import webpack from 'webpack';
import { BuildMode, buildWebpack } from './config/build/__webpack__';

interface EnvVars {
    mode: BuildMode;
    port: number;
}

export default (env: EnvVars) => {
    const config: webpack.Configuration = buildWebpack({
        port: env.port,
        mode: env.mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            output: path.resolve(__dirname, 'dest'),
            src: path.resolve(__dirname, 'src'),
        },
    });

    return config;
};
