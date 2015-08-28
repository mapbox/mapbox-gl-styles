var fs = require('fs');
var glob = require('glob');
var path = require('path');
module.exports.styles = {};
module.exports.sprites = {};

var styles = [
    'mapbox.dark-v7',
    'mapbox.light-v7',
    'mapbox.emerald-v7',
    'mapbox.streets-v7',
    'mapbox.bright-v7',
    'mapbox.empty-v7',
    'mapbox.basic-v7',
    'streets-v8',
    'light-v8',
    'dark-v8',
    'bright-v8',
    'basic-v8',
    'empty-v8',
    'satellite-v8',
    'satellite-hybrid-v8',
    'emerald-v8'
];

var spriteStyles = [
    'streets-v8',
    'light-v8',
    'dark-v8',
    'bright-v8',
    'basic-v8',
    'empty-v8',
    'satellite-hybrid-v8',
    'emerald-v8'
];

styles.forEach(function(style) {
    if(style.split('.')[1]) {
        module.exports.styles[style] = require('./styles/' + style.split('.')[1]);
    } else {
        module.exports.styles[style] = require('./styles/' + style);
    }
});

spriteStyles.forEach(function(style){
    if (style.indexOf('v8') > -1) {
        module.exports.sprites[style] = glob.sync(path.resolve(path.join(__dirname, 'sprites', style, '_svg', '*.svg')))
            .map(function(im) {
                 return {
                    svg: fs.readFileSync(im),
                    id: path.basename(im).replace('.svg', '')
                }
            });
    }
});
