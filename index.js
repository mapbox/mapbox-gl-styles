[
    'basic',
    'bright',
    'dark',
    'emerald',
    'empty',
    'light',
    'mapbox-streets',
    'outdoors',
    'pencil',
    'satellite'
].forEach(function(style) { exports[style] = require('./styles/' + style + '-v7.json'); });
