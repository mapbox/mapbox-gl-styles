var test = require('tape');
var mapboxGL = require('../index');
var fs = require('fs');

var maki = [
  'airfield',
  'alcohol-shop',
  'amusement-park',
  'aquarium',
  'art-gallery',
  'attraction',
  'bakery',
  'bank',
  'bar',
  'beer',
  'bicycle',
  'bicycle-share',
  'bus',
  'cafe',
  'car',
  'campsite',
  'castle',
  'cemetery',
  'cinema',
  'clothing-store',
  'college',
  'dentist',
  'doctor',
  'dog-park',
  'drinking-water',
  'embassy',
  'entrance',
  'fast-food',
  'ferry',
  'fire-station',
  'fuel',
  'garden',
  'golf',
  'grocery',
  'harbor',
  'heliport',
  'hospital',
  'ice-cream',
  'information',
  'laundry',
  'library',
  'lodging',
  'monument',
  'mountain',
  'museum',
  'music',
  'park',
  'pharmacy',
  'picnic-site',
  'place-of-worship',
  'playground',
  'police',
  'post',
  'prison',
  'religious-christian',
  'religious-jewish',
  'religious-muslim',
  'restaurant',
  'rocket',
  'school',
  'shop',
  'stadium',
  'swimming',
  'suitcase',
  'theatre',
  'toilet',
  'town-hall',
  'veterinary',
  'volcano',
  'zoo'
];

// check that all v7 styles exist
test('.styles v7 and v8', function(t) {
    t.test('should return all styles', function(t){
        Object.keys(mapboxGL.styles).forEach(function(style){
            t.ok(mapboxGL.styles[style].version, 'Check for version');
            t.ok(mapboxGL.styles[style].name, 'Check for version');
            t.ok(mapboxGL.styles[style].layers, 'Check for layers');
        });
        t.end();
    });
    t.end();
});

// check that all sprites exist
test('.sprites v8', function(t) {
    t.test('should return all v8 sprites', function(t){
        Object.keys(mapboxGL.sprites).forEach(function(sprite){
            t.ok(sprite.indexOf('v8') > -1);
            t.ok(mapboxGL.sprites[sprite].length > 0);
            t.ok(mapboxGL.sprites[sprite][0].id);
            t.equal(typeof mapboxGL.sprites[sprite][0].svg, 'object');
        });
        t.end();
    });
    t.end();
});

// check that sprites are properly named
test('.spritesheet v8', function(t) {
    t.test('should return properly referenced spritesheets in v8', function(t){
        Object.keys(mapboxGL.styles).forEach(function(stylesv8){
          var version = mapboxGL.styles[stylesv8].version;
          var name = mapboxGL.styles[stylesv8].name;
          if (version === 8 && name !== 'Empty') {
            t.equal(mapboxGL.styles[stylesv8].sprite, 'mapbox://sprites/mapbox/' + stylesv8, 'References mapbox spritesheet');
          }
        });
        t.end();
    });
    t.end();
});

// check that fonts are properly named
test('.glyphs v8', function(t) {
    t.test('should return properly referenced fontstacks in v8', function(t){
        Object.keys(mapboxGL.styles).forEach(function(stylesv8){
          var version = mapboxGL.styles[stylesv8].version;
          if (version === 8) {
            var name = mapboxGL.styles[stylesv8].name;
            t.equal(mapboxGL.styles[stylesv8].glyphs, 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf', 'References mapbox glyphs for ' + name);
          }
        });
        t.end();
    });
    t.end();
});

// checks all maki icons against list of expected
test('.maki v8', function(t) {
  mapboxGL.spriteStyles.forEach(function(style) {
    // checks string to see if the value exists
    if (style.indexOf('-v8') === -1 && style !== 'empty-v8') return;
    // console.log(style);
    fs.readdir('./sprites/' + style + '/_svg', function(err, files){
      if (err) t.fail(err);
        // console.log(files);
        maki.forEach(function(name){
          // boolean to see if the value is not false on an array
          var hasNames = (files.indexOf(name + '-11.svg') !== -1) && (files.indexOf(name + '-15.svg') !== -1);
          t.ok(hasNames, name + ' in ' +style);
        });
    });
  })
    t.end();
});

