[
    'dark',
    'emerald',
    'light',
    'mapbox-streets',
    'satellite'
].forEach(function(style) { exports[style] = require('./styles/' + style + '-v7.json'); });
