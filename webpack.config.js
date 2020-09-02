const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Don't include PatternFly styles twice
const reactCSSRegex = /(react-[\w-]+\/dist|react-styles\/css)\/.*\.css$/;

const NameSpace = 'mfe-poc'

const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = (env = {}, argv) => {
  const isProd = argv.mode === 'production';
  const publicPath = isProd
    ? ''.concat('http://single-sign-on-', NameSpace, '.apps.ocp4.patternfly.org/')
    : "http://localhost:3001/";
  const threeScalePath = isProd
    ? ''.concat('http://three-scale-', NameSpace, '.apps.ocp4.patternfly.org/')
    : "http://localhost:3002/";

  return ({
    entry: "./src/index",
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 3001,
    },
    output: {
      publicPath
    },
    module: { 
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react"],
          },
        },
        {
          test: /\.(svg|ttf|eot|woff|woff2|jpg|jpeg|png|gif)$/,
          use: 'file-loader',
        },
        {
          test: /\.css$/,
          exclude: reactCSSRegex,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { hmr: !env.prod },
            },
            "css-loader",
          ],
        },
        {
          test: reactCSSRegex,
          use: 'null-loader'
        }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new ModuleFederationPlugin({
        name: "sso",
        filename: "remoteEntry.js",
        remotes: {
          threeScale: `threeScale@${threeScalePath}remoteEntry.js`,
        },
        exposes: {
          "./ClientSelect": "./src/components/ClientSelect",
        },
        shared: {
          ...deps,
          react: {
            eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            eager: true,
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  });
}
