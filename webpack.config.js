const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/pages/index.js',
  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'ui-kit/ui-kit.html',
      template: './src/pages/ui-kit/ui-kit.pug'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
      template: './src/pages/index.styl'
    }),
    new CopyWebpackPlugin([
      { from: 'src/img', to: 'img' },
      // { from: 'src/fonts', to: 'fonts' },
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ],
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
      },
      { 
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true
      }
      },
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      { 
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /img/,
        loader: "file-loader",
        options: {
          publicPath: '../',
          name: './fonts/[name]/[name].[ext]'
        }
      },
      { 
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /fonts/,
        loader: "file-loader",
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  }
};