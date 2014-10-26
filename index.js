[
    'basic',
    'bright',
    'empty',
    'outdoors-raster',
    'outdoors',
    'pencil',
    'satellite'
].forEach(function(style) { exports[style] = require('./styles/' + style + '-v5.json'); });
