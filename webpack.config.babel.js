import 'babel-polyfill';
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const DEBUG = process.env.NODE_ENV !== 'production';
const VERBOSE = process.env.NODE_ENV === 'production';

export default {
  cache: DEBUG,
  debug: VERBOSE,
  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE
  },
  entry: {
    main: './src/main.js',
    index: './src/index.jsx'
  },
  output: {
    publicPath: './lib',
    path: './lib',
    filename: '[name].bundle.js'
  },
  target: 'electron',
  node: {
    __filename: false,
    __dirname: false
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': process.env.NODE_ENV }),
    new ExtractTextPlugin('bundle.css', { allChunks: true })
  ],
  module: {
    preLoaders: [
      {
        test: /\.styl$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'stylus'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel'
      },
      {
        test: /\.css$|\.styl$/,
        include: [path.resolve(__dirname, 'src')],
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'])
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'node_modules')],
        loader: ExtractTextPlugin.extract('raw')
      }
    ]
  },
  stylus: {
    use: [require('nib')()],
    import: ['~nib/lib/nib/index.styl']
  }
};
