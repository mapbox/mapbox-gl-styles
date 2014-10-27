[
    'basic',
    'bright',
    'empty',
    'outdoors-raster',
    'outdoors',
    'pencil',
    'satellite'
].forEach(function(style) { exports[style] = require('./styles/' + style + '-v6.json'); });
