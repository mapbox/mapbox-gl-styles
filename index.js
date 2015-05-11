[
    'dark',
    'emerald',
    'light',
    'mapbox-streets',
].forEach(function(style) { exports[style] = require('./styles/' + style + '-v7.json'); });
