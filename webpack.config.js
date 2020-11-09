const path = require("path");
const Extract = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");



const config = {
    entry : ENTRY_FILE,
    mode : MODE,
    module : {
        rules : [
            {
                test : /\.(scss)$/,
                use : Extract.extract([
                    {
                        loader : "css-loader"
                    },
                    {
                        loader : "postcss-loader"
                    },
                    {
                        loader : "sass-loader"
                    }
                ])
                //how to extract css text
                
            }
        ]
    },
    output : {
        path : OUTPUT_DIR,
        filename : "[name].[format]"
        //output is must be object
    }
};

module.exports = config;