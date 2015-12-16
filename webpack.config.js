import webpack from 'webpack';
import path from 'path';

export const GLOBALS = {
  '__CLIENT__': true,
  '__SERVER__': false,
  'process.env': Object.keys(process.env).reduce((envObj, key) => {
    envObj[key] = JSON.stringify(process.env[key]);
    return envObj;
  }, {}),
};

export const cache = false;

export const context = __dirname;

export const devtool = false;

export const entry = {
  app: [
    'babel-polyfill',
    './src/client',
  ],
};

export const output = {
  path: path.join(__dirname, 'static'),
  filename: 'bundle.js',
  publicPath: '/static/',
};

export const plugins = [
  new webpack.DefinePlugin(GLOBALS),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false,
    },
  }),
];

export const module = {
  loaders: [
    {
      test: /\.json$/,
      loader: 'json',
      include: [
        path.resolve(__dirname, 'src'),
      ],
      exclude: /node_modules/,
    },
    {
      test: /\.jsx?$/,
      loader: 'babel',
      presets: ['react', 'es2015', 'stage-0'],
      query: {
        cacheDirectory: true,
      },
      include: [
        path.resolve(__dirname, 'src'),
      ],
      exclude: /node_modules/,
    },
  ],
  noParse: /\.min\.js/,
};

export const resolve = {
  // alias: {
  //   react: path.join(__dirname, 'node_modules/react'),
  // },
  modulesDirectories: [
    'src',
    'node_modules',
  ],
  extensions: ['', '.json', '.js', '.jsx'],
};

export const externals = [
  'electron',
];

// export const target = function renderer(compiler) {
//   compiler.apply(
//     new webpack.JsonpTemplatePlugin(output),
//     new FunctionModulePlugin(output)
//   );
// };
