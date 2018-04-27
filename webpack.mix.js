let mix = require('laravel-mix');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


mix.react('resources/assets/src/app.js', 'public/assets/bundle')
    .version()
    .disableNotifications();

mix.webpackConfig({
    module: {
        rules: [
            {
                test:  /\.s[ac]ss$/,
                exclude : [],
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use : [
                        {
                            loader : 'css-loader',
                        },
                        {
                            loader : 'sass-loader',

                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    devtool : 'source-map'
}).sourceMaps();

mix.options({
    processCssUrls: false
});

