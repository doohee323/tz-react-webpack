module.exports = {
    entry: './src/App.js',

    output: {
        path: __dirname,
        filename: 'compiled.js'
    },

    devServer: {
        inline: true,
        port: 7777
    },

    module:
    {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
