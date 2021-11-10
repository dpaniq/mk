

const path = require('path')
const mix = require('laravel-mix')

const Dotenv = require('dotenv-webpack');

const SERVER_DIR = path.resolve(__dirname)
const REACT_JS_DIR = path.resolve(__dirname, 'resources', 'js', 'src')
const REACT_SCSS_DIR = path.resolve(__dirname, 'resources', 'js')



const envPlugin = new Dotenv({
    path: path.resolve(SERVER_DIR, '.env'), // load this now instead of the ones in '.env'
    safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
    allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
    systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    silent: true, // hide any errors
    defaults: false // load '.env.defaults' as the default values if empty.
})

mix
    .webpackConfig({
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
                    // include: path.resolve(__dirname, '../'),
                    use: [
                        // Creates `style` nodes from JS strings
                        // "style-loader",
                        // Translates CSS into CommonJS
                        // "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                // {
                //     test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                //     use: [
                //         {
                //             loader: 'file-loader',
                //             options: {
                //                 name: '[name].[ext]',
                //                 outputPath: 'fonts/'
                //             }
                //         }
                //     ]
                // },
                // {
                //     test: /\.(png|jpe?g|gif|svg)$/i,
                //     use: [
                //         {
                //             loader: 'file-loader',
                //             options: {
                //                 name: '[name].[ext]',
                //                 outputPath: 'images/'
                //             },
                //         }
                //     ],
                // },
            ]
        },
        resolve: {
            alias: {
                '@app': path.resolve(REACT_JS_DIR, 'app'),
                '@components': path.resolve(REACT_JS_DIR, 'components'),
                '@contexts': path.resolve(REACT_JS_DIR, 'contexts'),
                '@pages': path.resolve(REACT_JS_DIR, 'pages'),
                '@routes': path.resolve(REACT_JS_DIR, 'routes'),
                '@store': path.resolve(REACT_JS_DIR, 'store'),
                '@constants': path.resolve(REACT_JS_DIR, 'constants'),
                '@utils': path.resolve(REACT_JS_DIR, 'utils'),
                '@menu': path.resolve(REACT_JS_DIR, 'menu'),
                '@scss': path.resolve(REACT_SCSS_DIR, 'scss')
            },
            fallback: {
                "fs": false,
                "tls": false,
                "net": false,
                "path": false,
                "zlib": false,
                "http": false,
                "https": false,
                "stream": require.resolve("stream-browserify"),
                "crypto": false,
                "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
            },
        },
        plugins: [
            envPlugin
        ]
    })
    .js('resources/js/index.js', 'public/js')
    .sass('resources/js/scss/index.scss', 'public/css')
    .react()