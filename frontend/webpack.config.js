const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: {
		app: "./src/index.js",
	},
	output: {
		path: path.resolve(__dirname, "../backend/app/static/app/js"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
					{
						loader: "sass-loader",
					},
				],
			},
		],
	},
	optimization: {
		minimize: true,
	},
};
