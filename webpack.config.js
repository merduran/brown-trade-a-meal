var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/app',
  entry: {
	  javascript: './js/index.jsx',
	},
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    inject: 'body',
    title:  'CS132-Twitter-Feed-Part-2',
    template: path.join(__dirname, '/app/html/index.html'),
  })]
};
