import path from 'path';
import webpack from 'webpack';
import * as config from './webpack.config';

const {GLOBALS} = config;

config.output.publicPath = 'http://localhost:3000/';

config.cache = true;
config.debug = true;
config.devtool = 'cheap-module-eval-source-map';
config.entry.app.unshift(
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
);

config.plugins = [
  new webpack.DefinePlugin(GLOBALS),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];

config.module.preLoaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    include: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'test'),
    ],
  },
];

config.module.loaders.unshift({
  test: /\.jsx?$/,
  loader: 'react-hot',
  include: [
    path.resolve(__dirname, 'src'),
  ],
  exclude: /node_modules/,
});

config.module.eslint = {
  configFile: './.eslintrc',
};

export default config;
