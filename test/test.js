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
  'entrance',
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
  'rail',
  'rail-light',
  'rail-metro',
  'san-francisco-bart',
  'singapore-mrt',
  'stockholm-metro',
  'taipei-metro',
  'tokyo-metro',
  'vienna-u-bahn',
  'washington-metro'
];
var emeralShields = [
'default_2.svg',
'default_3.svg',
'default_4.svg',
'default_5.svg',
'default_6.svg',
'us-state-2.svg',
'us-state-3.svg',
'us-state-4.svg',
'us-highway-2.svg',
'us-highway-3.svg',
'us-highway-4.svg',
'interstate_2.svg',
'interstate_3.svg',
];
var emeraldMaki = [
'school',
'museum',
'library',
'monument',
'hospital',
'fire-station',
'religious-christian',
'religious-muslim',
'religious-jewish',
'post',
'embassy',
'police',
'prison',
'college',
'harbor',
'airport',
'airfield',
'park',
'golf',
'zoo',
'cemetery'
];
var shields = [
'at-expressway-2.svg',
'at-expressway-3.svg',
'at-motorway-2.svg',
'at-motorway-3.svg',
'at-state-b-2.svg',
'at-state-b-3.svg',
'bg-motorway-2.svg',
'bg-national-2.svg',
'br-federal-3.svg',
'br-state-2.svg',
'br-state-3.svg',
'ch-main-2.svg',
'ch-main-3.svg',
'ch-motorway-2.svg',
'ch-motorway-3.svg',
'ch-motorway-4.svg',
'cz-expressway-2.svg',
'cz-expressway-3.svg',
'cz-motorway-2.svg',
'cz-road-2.svg',
'cz-road-3.svg',
'de-federal-2.svg',
'de-federal-3.svg',
'de-federal-4.svg',
'de-motorway-2.svg',
'de-motorway-3.svg',
'default-2.svg',
'default-3.svg',
'default-4.svg',
'default-5.svg',
'default-6.svg',
'dk-primary-2.svg',
'dk-secondary-3.svg',
'e-road-2.svg',
'e-road-3.svg',
'e-road-4.svg',
'fi-main-2.svg',
'fi-regional-3.svg',
'fi-trunk-2.svg',
'gr-motorway-2.svg',
'gr-motorway-3.svg',
'gr-motorway-4.svg',
'gr-national-2.svg',
'gr-national-3.svg',
'gr-national-4.svg',
'hr-county-4.svg',
'hr-motorway-3.svg',
'hr-motorway-4.svg',
'hr-state-2.svg',
'hr-state-3.svg',
'hu-main-2.svg',
'hu-main-3.svg',
'hu-main-4.svg',
'hu-main-5.svg',
'hu-motorway-2.svg',
'hu-motorway-3.svg',
'in-national-2.svg',
'in-national-3.svg',
'in-national-4.svg',
'in-state-2.svg',
'in-state-3.svg',
'mx-federal-2.svg',
'mx-federal-3.svg',
'mx-federal-4.svg',
'mx-state-2.svg',
'mx-state-3.svg',
'mx-state-4.svg',
'nz-state-2.svg',
'nz-state-3.svg',
'pe-national-2.svg',
'pe-national-3.svg',
'pe-regional-3.svg',
'pl-expressway-2.svg',
'pl-expressway-3.svg',
'pl-motorway-2.svg',
'pl-motorway-3.svg',
'pl-national-2.svg',
'pl-voivodeship-3.svg',
'ro-communal-2.svg',
'ro-communal-3.svg',
'ro-communal-4.svg',
'ro-communal-5.svg',
'ro-communal-6.svg',
'ro-county-3.svg',
'ro-county-4.svg',
'ro-motorway-2.svg',
'ro-motorway-3.svg',
'ro-national-2.svg',
'ro-national-3.svg',
'rs-motorway-3.svg',
'rs-state-1b-2.svg',
'rs-state-2a-3.svg',
'rs-state-2b-3.svg',
'se-main-2.svg',
'se-main-3.svg',
'si-expressway-3.svg',
'si-main-2.svg',
'si-main-3.svg',
'si-motorway-2.svg',
'singapore-mrt.svg',
'sk-highway-2.svg',
'sk-road-2.svg',
'sk-road-3.svg',
'sk-road-4.svg',
'sk-road-5.svg',
'us-highway-2.svg',
'us-highway-3.svg',
'us-highway-4.svg',
'us-highway-alternate-2.svg',
'us-highway-alternate-3.svg',
'us-highway-business-2.svg',
'us-highway-business-3.svg',
'us-highway-bypass-2.svg',
'us-highway-bypass-3.svg',
'us-highway-duplex-3.svg',
'us-highway-duplex-4.svg',
'us-highway-duplex-5.svg',
'us-highway-truck-2.svg',
'us-highway-truck-3.svg',
'us-interstate-2.svg',
'us-interstate-3.svg',
'us-interstate-business-2.svg',
'us-interstate-business-3.svg',
'us-interstate-duplex-4.svg',
'us-interstate-duplex-5.svg',
'us-state-2.svg',
'us-state-3.svg',
'us-state-4.svg',
'za-metropolitan-2.svg',
'za-national-2.svg',
'za-provincial-2.svg',
'za-regional-3.svg'
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
test('.maki v8 - checks all maki icons against list of expected maki icons', function(t) {
  var styles = mapboxGL.spriteStyles;
  styles.forEach(function(style, i) {
    fs.readdir('./sprites/' + style + '/_svg', function(err, files) {
      if (err) t.fail(err);
      if(style === 'emerald-v8') {
         emeraldMaki.forEach(function(name) {
          t.ok(files.indexOf(name + '_icon.svg') !== -1, name + '_icon.svg' + ' in ' + style);
        });
      } else {
          maki.forEach(function(name) {
            t.ok(files.indexOf(name + '-11.svg') !== -1, name + '-11.svg' + ' in ' + style);
            t.ok(files.indexOf(name + '-15.svg') !== -1, name + '-15.svg' + ' in ' + style);
          });
      }
      if (i === styles.length - 1) {
        t.end();
      }
    });
  });
});

// checks all `maki` rail icons against list of expected
var styleMaki = [];
var styleValue = [];
mapboxGL.spriteStyles.forEach(function(style, i) {
  var totalLayers = mapboxGL.styles[style].layers;
  for(var i=0; i < totalLayers.length; i++) {
    var sourceLayer = mapboxGL.styles[style].layers[i]['source-layer'];
    if(sourceLayer === 'rail_station_label' && mapboxGL.styles[style].layers[i].layout['icon-image'] !== '{network}') {
      var iconImage =  mapboxGL.styles[style].layers[i].layout['icon-image'];
      styleMaki.push(style);
      styleValue.push(mapboxGL.styles[style].layers[i].layout['icon-image']);
    }
  }
});
for(var i=0; i < styleMaki.length; i++) {
  test('.rail v8 (maki) - checks all maki rail icons against list of expected', function(t) {
    styleMaki.forEach(function(style, j) {
      fs.readdir('./sprites/' + style + '/_svg', function(err, files) {
        if (err) t.fail(err);
        railMaki.forEach(function(name, k) {
          if(styleValue[j] === '{maki}-11') {
            t.ok(files.indexOf(name + '-11.svg') !== -1, name + '-11.svg' + ' in ' + style);
          }
          if(styleValue[j] === '{maki}-15') {
            t.ok(files.indexOf(name + '-15.svg') !== -1, name + '-15.svg' + ' in ' + style);
          }
          if(styleValue[j] === '{maki}') {
            t.ok(files.indexOf(name + '.svg') !== -1, name + '.svg' + ' in ' + style);
          }
        });
        if(i === styleMaki.length) {
          t.end();
        }
      });
    });
  });
}

// checks all `network` rail icons against list of expected
test('.rail v8 (network) - checks all network rail icons against list of expected', function(t) {
  var styleNetworks = []; // an array to hold the styles that have ^^
  mapboxGL.spriteStyles.forEach(function(style, i) {
    var totalLayers = mapboxGL.styles[style].layers;
    for(i=0; i < totalLayers.length; i++) {
      var sourceLayer = mapboxGL.styles[style].layers[i]['source-layer'];
      if(sourceLayer === 'rail_station_label' && mapboxGL.styles[style].layers[i].layout['icon-image'] == '{network}') {
        styleNetworks.push(style);
      }
    }
  });
  styleNetworks.forEach(function(style, i) {
    fs.readdir('./sprites/' + style + '/_svg', function(err, files) {
      if (err) t.fail(err);
      railNetwork.forEach(function(name) {
        if(name === 'entrance' && style == 'emerald-v8') {
          // ignore
        } else {
            t.ok(files.indexOf(name + '.svg') !== -1, name + '.svg' + ' in ' + style);
          }
      });
      if (i === styleNetworks.length - 1) {
        t.end();
      }
    });
  });
});

// checks all highway shields against list of expected
test('.shields v8 - checks all highway shields against list of expected', function(t) {
  var highwayShields = [];
  mapboxGL.spriteStyles.forEach(function(style, i) {
    var totalLayers = mapboxGL.styles[style].layers;
    for(i=0; i < totalLayers.length; i++) {
      var sourceLayer = mapboxGL.styles[style].layers[i]['source-layer'];
      if(sourceLayer === 'road_label' && mapboxGL.styles[style].layers[i].layout['icon-image'] == '{shield}-{reflen}') {
        highwayShields.push(style);
      }
    }
  });
  highwayShields.forEach(function(style, i) {
    fs.readdir('./sprites/' + style + '/_svg', function(err, files) {
      if (err) t.fail(err);
      if(style === 'emerald-v8') {
        emeralShields.forEach(function(name) {
          t.ok(files.indexOf(name) !== -1, name + ' in ' + style);
        });
      } else {
        shields.forEach(function(name) {
          t.ok(files.indexOf(name) !== -1, name + ' in ' + style);
        });
      }
      if (i === highwayShields.length - 1) {
        t.end();
      }
    });
  });
});
