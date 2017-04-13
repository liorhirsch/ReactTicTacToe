var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'src/client/app');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');


module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module : {
      loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
        extensions: ['.js', '.jsx']
    }
};
