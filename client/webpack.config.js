var HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
    },
    {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader?name=[path][name].[ext]?[hash]',
            options: {
              name: './font/[hash].[ext]',
            },
          },
        ]
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dist/index.html'
    }),
    new LiveReloadPlugin({})
  ],
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    contentBase: './dist',
    port: 8080,
    open: true,
    proxy: {
        "/api": process.env.API_URL
    }
  },
  devtool: 'inline-source-map'
};