let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebPackPlugin = require("html-webpack-plugin");

const stylesHandler = 'style-loader';

let conf = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'), // Куда делать оброку
		filename: '[name].js', // Шаблон для названия файлов
		clean: true, // Очистить ./dist перед сборкой
	},
	resolve: {
		extensions: ['.js', '.jsx'], // расширения по умолчанию если не указаны в import
		modules: ['./', 'node_modules'], // Где искать файлы подключаемых модулей (пакетов)
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '.'),
		}
	},
	plugins: [
		new MiniCssExtractPlugin(), // Плагин для вытаскивания собранных стилей в отдельный файл
		new HtmlWebPackPlugin({
			template: './index.html',
			filename: './index.html',
			title: 'Simple SPA',
			base: '/',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								mode: "local",
								localIdentName: "[name]__[local]--[hash:base64:5]",
							},
						},
					},
				],
				//   stylesHandler,
				//   {
				//     loader: "css-loader",
				//     options: {
				//       modules: {
				//         localIdentName: '[local]__[hash]'
				//       }
				//     },
				//   },
				// ],
				include: /\.module\.css$/i,
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, "css-loader"],

				exclude: /\.module\.css$/i,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [stylesHandler, 'css-loader', 'sass-loader'],
				exclude: /\.module\.s[ac]ss$/i,

			},
			{
				test: /\.s[ac]ss$/i,
				use: [stylesHandler, {
					loader: "css-loader",
					options: {
						modules: {
							localIdentName: '[local]__[hash]'
						}
					},
				}, 'sass-loader'],
				include: /\.module\.s[ac]ss$/i,
			},
		]
	},
};

module.exports = (env, options) => {
	let isProd = options.mode === 'production';
	conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
	return conf;
}