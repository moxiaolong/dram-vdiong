const path= require('path');
const Live2dPlugins = () => ({
    enhanceAppFiles: [
        path.resolve(__dirname, 'autoload.js')
    ]
});
module.exports = Live2dPlugins;
