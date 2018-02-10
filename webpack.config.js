// entry -> output
const path = require('path');

const javascript = {
  test: /\.js$/,
  use: [{
    loader: 'babel-loader',
    options: { 
      presets: ['env', 'react'],
      plugins: ['transform-class-properties', 'transform-object-rest-spread']
    }
  }],
  exclude: /node_modules/
};

const styles = {
  test: /\.s?css$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
}

const config = {
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  },
  module: {
    rules: [javascript, styles]
  }
};

// test: /\.(js)$/, // see how we match anything that ends in `.js`? Cool
// use: [{
//   loader: 'babel-loader',
//   options: { presets: ['env'] } // this is one way of passing options
// }],

module.exports = config;