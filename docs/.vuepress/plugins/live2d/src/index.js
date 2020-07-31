const path= require('path');
require("swipe")
const Live2dPlugins = () => ({
    enhanceAppFiles: [
        path.resolve(__dirname, 'autoload.js')
    ]
});
module.exports = Live2dPlugins;
