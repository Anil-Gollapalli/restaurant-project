const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],  // Add loaders to handle CSS files
      },
      {
        test: /\.js$/,                     // Check for .js files
        exclude: /node_modules/,           // Exclude node_modules
        use: {
          loader: 'babel-loader',          // Use Babel to transpile JS files
          options: {
            presets: ['@babel/preset-env'],  // Use the preset for modern JavaScript
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',  // Use this template for generating the HTML
      filename: 'index.html',
    }),
  ],
};
