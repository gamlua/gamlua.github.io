const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
const ESLintPlugin = require('eslint-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',

  entry: {
    // styles: './assets/src/scss/styles.scss',
    // vendors: './assets/src/js/vendors.js',
    app: './assets/src/js/index.js',
    styles: './assets/src/dummy-style-entry.js',
  },

  output: {
    path: path.resolve(__dirname, 'assets/public'),
    filename: 'js/[name].min.js',
    clean: true,
  },

  // externals: {
  //   jquery: 'jQuery',
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'assets/src/js'),
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: [['@babel/preset-env', { modules: false }]],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        include: path.resolve(__dirname, 'assets/src/images'),
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
          publicPath: '../images',
        },
        use: [
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              severityError: 'warning',
              minimizerOptions: {
                plugins: [
                  ['gifsicle', { interlaced: true }],
                  ['jpegtran', { progressive: true }],
                  ['optipng', { optimizationLevel: 5 }],
                  ['svgo', { plugins: [{ removeViewBox: false }] }],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff2?|ttf|eot)$/i,
        include: path.resolve(__dirname, 'assets/src/fonts'),
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    new WebpackBar(),
    new ESLintPlugin({
      extensions: ['js'],
      overrideConfigFile: path.resolve(__dirname, '.eslintrc.js'),
    }),
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
      chunkFilename: '[id].min.css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|scss|sass)$/,
          chunks: 'all',
          enforce: true,
        },
      },
      minChunks: 1,
      minSize: 20000,
    },
  },

  resolve: {
    extensions: ['.js', '.scss', '.css'],
  },
}
