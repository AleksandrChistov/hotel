const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const pages = [
  { filename: 'index.html', template: './src/pages/index.pug', chunks: ['app', 'vendors'] },
  { filename: 'ui-kit/ui-kit.html', template: './src/pages/ui-kit/ui-kit.pug', chunks: ['ui-kit', 'vendors'] }
];

module.exports = env => {
  return {
    entry: {
     'app': './src/pages/',
     'ui-kit': './src/pages/ui-kit/ui-kit'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]/js/[name].[hash].js'
    },
    optimization: {
      minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            filename: 'app/js/[name].[hash].js',
            test: /node_modules/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'dist'),
      port: 9000
    },
    plugins: [
      new HtmlWebpackPlugin(pages[0]),
      new HtmlWebpackPlugin(pages[1]),
      new MiniCssExtractPlugin({
        filename: '[name]/css/[name].[hash].css'
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
        filename: '[file].map',
        exclude: /vendors.*.*/
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
          query: {
            pretty: env === 'development' ? true : false,
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
            publicPath: '../../',
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
  }
};