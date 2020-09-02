const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const { dependencies, port, name } = require("./package.json");
delete dependencies.serve; // Needed for nodeshift bug

// Don't include PatternFly styles twice
const reactCSSRegex = /(react-[\w-]+\/dist|react-styles\/css)\/.*\.css$/;

module.exports = (env = { threescalePort: 3002, navPort: 3003 }, argv) => {
  const isProd = argv.mode === 'production';
  const { remoteSuffix } = env;
  const publicPath = (isProd && remoteSuffix)
    ? `http://sso${remoteSuffix}/`
    : `http://localhost:${port}/`;
  const navigationPath = (isProd && remoteSuffix)
    ? `http://navigation${remoteSuffix}/`
    : `http://localhost:${env.navPort}/`;

  return ({
    entry: "./src/index",
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port
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
        name,
        filename: "remoteEntry.js",
        remotes: {
          navigation: `navigation@${navigationPath}remoteEntry.js`,
        },
        exposes: {
          "./ClientSelect": "./src/components/ClientSelect",
        },
        shared: {
          ...dependencies,
          react: {
            eager: true,
            singleton: true,
            requiredVersion: dependencies.react,
          },
          "react-dom": {
            eager: true,
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  });
}
