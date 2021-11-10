const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

const DEVELOPMENT_ENV = new Dotenv({
    path: path.resolve(__dirname, './.env.development'),
    safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
    allowEmptyValues: false, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
    systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    silent: false, // hide any errors
    defaults: false // load '.env.defaults' as the default values if empty.
})
const PRODUCTION_ENV = new Dotenv({
    path: path.resolve(__dirname, './.env.production'),
    safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
    allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
    systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    silent: true, // hide any errors
    defaults: false // load '.env.defaults' as the default values if empty.
})

const COMMON_CONFIG = {
    entry: path.resolve(__dirname, './src/index.js'),
    // Where files should be sent once they are bundled
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'App.js',
    },
    // webpack 5 comes with devServer which loads in development mode
    // devServer: {
    //     port: 3000,
    //     watchContentBase: true
    // },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
        // headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        //     "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        //   }
        //   proxy: {
        //     '/api': {
        //        target: {
        //           host: "0.0.0.0",
        //           protocol: 'http:',
        //           port: 8080
        //        },
        //        pathRewrite: {
        //           '^/api': ''
        //        }
        //     }
    },


    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.s[ac]ss$/i,
                include: path.resolve(__dirname, '../'),
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        },
                    }
                ],
            },
        ]
    },

}

const DEVELOPMENT_CONFIG_PLUGINS = {
    plugins: [
        DEVELOPMENT_ENV,
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]
}

const PRODUCTION_CONFIG_PLUGINS = {
    plugins: [
        PRODUCTION_ENV,
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]
}

const DEVELOPMENT_DEVTOOL = { devtool: 'inline-source-map' }
const PRODUCTION_DEVTOOL = { devtool: false }

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        return { ...COMMON_CONFIG, ...DEVELOPMENT_DEVTOOL, ...DEVELOPMENT_CONFIG_PLUGINS };
    }

    if (argv.mode === 'production') {
        return { ...COMMON_CONFIG, ...PRODUCTION_DEVTOOL, ...PRODUCTION_CONFIG_PLUGINS };
    }
}