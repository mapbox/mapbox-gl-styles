var test = require('tape');
var mapboxGL = require('../index');

test('check that towns are not styled without cities', function(t) {
  mapboxGL.spriteStyles.forEach(function(styleName) {
    var style = require('../styles/' + styleName + '.json');
    var hasTown = false;
    style.layers.forEach(function(layer) {
      if(layer['source-layer'] === 'place_label') {
        if(layer.filter[0] === '==') {
          if(layer.filter.indexOf('type') > -1 && layer.filter.indexOf('town') > -1) {
            hasTown = true;
          }
        }
        if(layer.filter[0] === 'all') {
          layer.filter.forEach(function(e) {
            if(e.indexOf('type') > -1 && e.indexOf('town') > -1) {
              hasTown = true;
            }
          });
        }
      }
    });

    if(!hasTown) return;
    var hasCity = false;

    style.layers.forEach(function(layer) {
      if(layer['source-layer'] === 'place_label') {
        if(layer.filter[0] === '==') {
          if(layer.filter.indexOf('type') > -1 && layer.filter.indexOf('city') > -1) {
            hasCity = true;
          }
        }
        if(layer.filter[0] === 'all') {
          layer.filter.forEach(function(e) {
            if(e.indexOf('type') > -1 && e.indexOf('city') > -1) {
              hasCity = true;
            }
          });
        }
      }
    });

    if(hasTown) {
      t.equal(hasCity, true, styleName + ' - this has town and has city');
    }
  });
  t.end();
});

