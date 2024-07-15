import webpack from 'webpack';
import { BuildPaths } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders({ css }: BuildPaths): webpack.RuleSetRule[] {
  // если не используется TS - необходимо подключить babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.(css|sass)$/i,
    include: css,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  };

  return [typescriptLoader, cssLoader];
}
