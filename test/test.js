var test = require('tape');
var mapboxGL = require('../index');
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
    'satellite-hybrid-v8',
    'emerald-v8'
];

test('.styles', function(t) {
    t.test('should return all styles', function(t){
        Object.keys(mapboxGL.styles).forEach(function(style){
            t.ok(mapboxGL.styles[style].version, 'Check for version');
            t.ok(mapboxGL.styles[style].name, 'Check for version');
            t.ok(mapboxGL.styles[style].layers, 'Check for layers');
        });
        t.equal(styles.length, Object.keys(mapboxGL.styles).length, 'Check that all styles were hit');
        t.end();
    });
    t.test('should not return a style', function(t){
        var fake = mapboxGL.styles['foobar'];
        t.equal(fake, undefined);
        t.end();
    });
    t.end();
});

test('.sprites', function(t) {
    t.test('should return all styles', function(t){
        Object.keys(mapboxGL.sprites).forEach(function(sprite){
            t.ok(sprite.indexOf('v8') > -1);
            t.ok(mapboxGL.sprites[sprite].length > 0);
            t.ok(mapboxGL.sprites[sprite][0].id);
            t.equal(typeof mapboxGL.sprites[sprite][0].svg, 'object');
        });
        t.end();
    });
    t.test('should not return a sprite', function(t){
        var fake = mapboxGL.sprites['foobar'];
        t.equal(fake, undefined);
        t.end();
    });
    t.end();
});
