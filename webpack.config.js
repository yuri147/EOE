'use strict';

const path = require('path');

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'eoe.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
};

module.exports = config;
