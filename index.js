[
    'basic',
    'bright',
    'dark',
    'emerald',
    'empty',
    'light',
    'streets'
].forEach(function(style) { exports[style] = require('./styles/' + style + '-v8.json'); });
