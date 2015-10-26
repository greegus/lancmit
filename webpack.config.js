'use strict';

var webpack = require('webpack');

module.exports = [
	{
		name: 'rendering',
		target: 'node',
		entry: {
			bundle: './src/app.js',
		},
		output: {
			path: __dirname + '/dist',
			filename: '[name].js',
		},
		module: {
			loaders: [
				{
					test: /\.json$/,
					// exclude: /node_modules/,
					loader: 'json-loader'
				},
				{
					test: /\.jsx$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				}
			]
		}
	}
];
