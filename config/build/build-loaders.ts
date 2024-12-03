import webpack from 'webpack';
import { BuildPaths, BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(
  options: BuildOptions,
  { css }: BuildPaths
): webpack.RuleSetRule[] {
  // если не используется TS - необходимо подключить babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          loader: 'css-loader',
          options: {
            module: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: options.isDev
                ? '[path][name]__[local]'
                : '[hash.base68:8]',
            },
          },
        },
      },
      'sass-loader',
    ],
  };

  const cssLoader = {
    test: /\.(css|sass)$/i,
    include: css,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
    ],
  };

  return [typescriptLoader, cssLoader, sassLoader];
}
