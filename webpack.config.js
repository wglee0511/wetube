const path = require("path");
const ExtractCSS = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

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
                use : [
                        {
                            loader : ExtractCSS.loader
                        },
                        {
                            loader : "css-loader"
                        },
                        {
                            loader : "postcss-loader",
                            options : {
                               postcssOptions : {
                                   plugins : [
                                        [
                                            "autoprefixer",{
                                                //options
                                                browsers : "cover 99.5%"
                                            }
                                        ]
                                   ]
                               }
                            }
                        },
                        {
                            loader : "sass-loader"
                        }
                    
                ]
                //how to extract css text
                
            }
        ]
    },
    output : {
        path : OUTPUT_DIR,
        filename : "[name].js"
        //output is must be object
    },
    plugins : [
        new ExtractCSS({
            filename : "styles.css"
        })
    ] 
};

module.exports = config;