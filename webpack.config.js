let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');


const stylesHandler = 'style-loader';

let conf = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'main.js',
		publicPath: '/dist/',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '.'),
		}
	},
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
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css'
		})
	]
};

module.exports = (env, options) => {
	let isProd = options.mode === 'production';
	conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
	return conf;
}