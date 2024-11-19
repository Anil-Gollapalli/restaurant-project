<<<<<<< HEAD
=======
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'dist'),
//     },
//     port: 8080,
//   },
//   mode: 'development',
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],  // Add loaders to handle CSS files
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/template.html',  // Use this template for generating the HTML
//       filename: 'index.html',
//     }),
//   ],
// };


>>>>>>> bfee5ea264b9f902187cf80da24cd43a9fe22e95
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
<<<<<<< HEAD
        use: ['style-loader', 'css-loader'],  // Add loaders to handle CSS files
=======
        use: ['style-loader', 'css-loader'], // Handle CSS
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i, // Handle image files
        use: [
          {
            loader: 'file-loader', // Copy images to dist folder
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images/', // Store images in dist/images/
            },
          },
        ],
>>>>>>> bfee5ea264b9f902187cf80da24cd43a9fe22e95
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
<<<<<<< HEAD
      template: './src/template.html',  // Use this template for generating the HTML
=======
      template: './src/template.html',
>>>>>>> bfee5ea264b9f902187cf80da24cd43a9fe22e95
      filename: 'index.html',
    }),
  ],
};
