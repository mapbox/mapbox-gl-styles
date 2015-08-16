[
    'basic',
    'bright',
    'dark',
    'emerald',
    'empty',
    'light',
    'streets',
    'satellite',
    'satellite-hybrid'
].forEach(function(style) { exports[style] = require('./styles/' + style + '-v8.json'); });
