const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const pages = [
  { filename: 'index.html', template: './pages/index.pug', chunks: ['app', 'vendors'] },
  { filename: 'ui-kit/index.html', template: './pages/ui-kit/ui-kit.pug', chunks: ['ui-kit', 'vendors'] },
  { filename: 'search-room/index.html', template: './pages/search-room/search-room.pug', chunks: ['search-room', 'vendors'] },
  { filename: 'room-details/index.html', template: './pages/room-details/room-details.pug', chunks: ['room-details', 'vendors'] },
  { filename: 'registration/index.html', template: './pages/registration/registration.pug', chunks: ['registration', 'vendors'] },
  { filename: 'sign-in/index.html', template: './pages/sign-in/sign-in.pug', chunks: ['sign-in', 'vendors'] }
];

let obj = {};

pages.forEach(item => {
  let name = item.chunks[0];
  let val = item.template.substring(0, item.template.length - 4);
  obj[name] = val;
});

module.exports = env => {
  return {
    entry: obj,
    context: path.resolve(__dirname, 'src'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: env === 'development' ? '[name]/js/script.js' : '[name]/js/script.[hash].js'
    },
    optimization: {
      minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            filename: env === 'development' ? 'app/js/[name].js' : 'app/js/[name].[hash].js',
            test: /node_modules/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'src'),
      historyApiFallback: true,
      port: 9000
    },
    plugins: [
      ...pages.map(page => new HtmlWebpackPlugin(page)),
      new MiniCssExtractPlugin({
        filename: env === 'development' ? '[name]/css/style.css' : '[name]/css/style.[hash].css',
      }),
      new CopyWebpackPlugin([
        { from: 'components/slider-room/room-img', to: 'img/room-img' },
        { from: 'components/footer/social-img', to: 'img/social-img' },
        { from: 'pages/room-details/img', to: 'img/room-img' }
      ]),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        noUiSlider: 'nouislider'
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
          use: [MiniCssExtractPlugin.loader, 'css-loader', 
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('css-mqpacker')({sort: true})
              ]
            }
          }, 
          'stylus-loader']
        },
        {
          test: /\.css$/,
          loaders: ["style-loader", "css-loader"]
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
            name: 'fonts/[name]/[name].[ext]'
          }
        },
        { 
          test: /\.(png|jpg|gif|svg|ico)$/,
          exclude: /fonts/,
          loader: "file-loader",
          options: {
            name: 'img/[name].[ext]'
          }
        }
      ]
    }
  }
};