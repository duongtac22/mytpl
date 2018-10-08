const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
    mode: "development",   
    entry: "./src/app.js", 
    output: {
        path: path.resolve(__dirname, "script"), // string
        // folder chứa các output của webpack , ở đây các file sau khi build sẽ được lưu ở folder "script" 
        filename: "bundle.js",
        publicPath: "/script/", // string
    },
    // tự động compile khi lưu code.
    watch: true,
    // tự động reload page khi compile xong.
    devServer: {
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: "html-loader", options: { minimize: true } }]
            },
            // {
            //     test: /jquery.+\.js$/,
            //     use: [{
            //         loader: 'expose-loader',
            //         options: 'jQuery'
            //     },{
            //         loader: 'expose-loader',
            //         options: '$'
            //     }]
            // },
            {
                test: /\.(sa|sc|c)ss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "module.css", // tên file css được compile từ  scss
            chunkFilename: "[id].css"
        })
    ],
    // externals: {
    //     jquery: 'jQuery'
    // }
};
