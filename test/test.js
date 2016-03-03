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
var railNetwork = [
  'barcelona-metro',
  'boston-t',
  'chongqing-rail-transit',
  'de-s-bahn',
  'de-s-bahn.de-u-bahn',
  'de-u-bahn',
  'delhi-metro',
  'gb-national-rail',
  'gb-national-rail.london-dlr',
  'gb-national-rail.london-dlr.london-overground.london-tfl-rail.london-underground',
  'gb-national-rail.london-dlr.london-overground.london-underground',
  'gb-national-rail.london-dlr.london-underground',
  'gb-national-rail.london-overground',
  'gb-national-rail.london-overground.london-tfl-rail.london-underground',
  'gb-national-rail.london-overground.london-underground',
  'gb-national-rail.london-tfl-rail',
  'gb-national-rail.london-tfl-rail.london-overground',
  'gb-national-rail.london-tfl-rail.london-underground',
  'gb-national-rail.london-underground',
  'hong-kong-mtr',
  'kiev-metro',
  'london-dlr',
  'london-dlr.london-tfl-rail',
  'london-dlr.london-tfl-rail.london-underground',
  'london-dlr.london-underground',
  'london-overground',
  'london-overground.london-tfl-rail',
  'london-overground.london-tfl-rail.london-underground',
  'london-overground.london-underground',
  'london-tfl-rail',
  'london-tfl-rail.london-underground',
  'london-underground',
  'madrid-metro',
  'mexico-city-metro',
  'milan-metro',
  'moscow-metro',
  'new-york-subway',
  'osaka-subway',
  'oslo-metro',
  'paris-metro',
  'paris-metro.paris-rer',
  'paris-rer',
  'paris-rer.paris-transilien',
  'paris-transilien',
  'philadelphia-septa',
  'san-francisco-bart',
  'singapore-mrt',
  'stockholm-metro',
  'taipei-metro',
  'tokyo-metro',
  'vienna-u-bahn',
  'washington-metro'
];
var railMaki = [
  'rail',
  'rail-metro',
  'rail-light',
  'entrance'
];

// check that all v7 styles exist
test('.styles v7 and v8', function(t) {
  t.test('should return all styles', function(t) {
    Object.keys(mapboxGL.styles).forEach(function(style) {
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
  t.test('should return all v8 sprites', function(t) {
    Object.keys(mapboxGL.sprites).forEach(function(sprite) {
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
  t.test('should return properly referenced spritesheets in v8', function(t) {
    Object.keys(mapboxGL.styles).forEach(function(stylesv8) {
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
  t.test('should return properly referenced fontstacks in v8', function(t) {
    Object.keys(mapboxGL.styles).forEach(function(stylesv8) {
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
  t.test('checks all maki icons against list of expected maki icons', function(t) {
    mapboxGL.spriteStyles.forEach(function(style) {
      if (style.indexOf('-v8') === -1 && style !== 'empty-v8') return;
      fs.readdir('./sprites/' + style + '/_svg', function(err, files) {
        if (err) t.fail(err);
        maki.forEach(function(name) {
          // boolean to see if the value is not false on an array
          t.ok(files.indexOf(name + '-11.svg') !== -1, name + '-11.svg' + ' in ' +style);
          t.ok(files.indexOf(name + '-15.svg') !== -1, name + '-15.svg' + ' in ' +style);
        });
      });
    });
    t.end();
  });
  t.end();
});


// checks all rail icons against list of expected
test('.rail v8', function(t) {
  t.test('checks all rail icons for against either network or maki icon list', function(t) {
    mapboxGL.spriteStyles.forEach(function(style, i) {
      // pass variable for arrays
      var totalLayers = mapboxGL.styles[style].layers;
      var totalSourceLayers = 0;
      for(i=0; i < totalLayers.length; i++) {
        var sourceLayer = mapboxGL.styles[style].layers[i]['source-layer'];
        if(sourceLayer === 'rail_station_label') {
          totalSourceLayers = totalSourceLayers + 1;
          // network if condition
          if(mapboxGL.styles[style].layers[i].layout['icon-image'] == '{network}') {
            fs.readdir('./sprites/' + style + '/_svg', function(err, files) {
              if (err) t.fail(err);
              railNetwork.forEach(function(name) {
                t.ok(files.indexOf(name + '.svg') !== -1, name + '.svg' + ' in ' + style);
              });
            });
          } // end network if
          // maki if condition
          else if(mapboxGL.styles[style].layers[i].layout['icon-image'] == '{maki}') {
            fs.readdir('./sprites/' + style + '/_svg', function(err, files) {
              if (err) t.fail(err);
              railMaki.forEach(function(name) {
                t.ok(files.indexOf(name + '.svg') !== -1, name + '.svg' + ' in ' + style);
              });
            });
          } // end maki if
        } // end sourceLayer if
      } // end for loop
    });
    t.end();
  });
  t.end();
});


