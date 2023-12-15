const path = require("path");

module.exports = {
	entry: './bin/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
		  {
			test: /\.(png|jpe?g|gif|svg)$/i,
			use: [
			  {
				loader: 'file-loader',
				options: {
				  name: '[name].[ext]',
				  outputPath: 'images/', // specify the output directory
				},
			  },
			],
		  },
		],
	},
};