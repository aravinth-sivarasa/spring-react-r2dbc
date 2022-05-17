var path = require('path');

module.exports = {
    entry: './src/main/react/index.tsx',
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            { 
                test: /\.svg$/i,
                use: [
                  {
                    loader: 'url-loader',
                  },
                ]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
};