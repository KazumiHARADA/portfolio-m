module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'index.js',
        publicPath: '/dist/'
    },
    devtool: '#source-map',
    devServer: {
        contentBase: './',
        port: 8080,
        inline: true
    },
    module: {
        preLoaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'eslint' }
        ],
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            {
                test: /\.css$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'resolve-url',
                    'sass'
                ]
            }
        ]
    },
    eslint: {
        configFile: './.eslintrc'
    }
};
