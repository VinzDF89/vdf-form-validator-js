const path = require('path');

module.exports = {
    mode: "production",
    target: ['web', 'es3'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vdf-form-validator.js',
        libraryTarget: "umd",
        library: "VDFValidator",
        umdNamedDefine: true,
        libraryExport: 'default'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    "@babel/plugin-proposal-class-properties",
                    "@babel/plugin-proposal-private-methods",
                    "@babel/plugin-transform-classes",
                    "@babel/plugin-transform-runtime"
                ]
              }
            }
          }
        ]
    }
}