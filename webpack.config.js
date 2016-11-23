const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEBUG = process.env.NODE_ENV !== 'production';
const VERBOSE = process.env.NODE_ENV === 'production';

module.exports = {
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
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$|\.styl$/,
        include: [path.resolve(__dirname, 'src')],
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'])
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'src')],
        loader: ExtractTextPlugin.extract('raw')
      }
    ]
  },
  devtool: "#source-map",
  stylus: {
    use: [require('nib')(), require('foovar')()],
    import: ['~nib/lib/nib/index.styl']
  }
};
