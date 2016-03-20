var _ = require('underscore-node');
var model = require('../model-empty-style.json');
var test = require('tape');
var mapboxGL = require('../index');

test('check that towns are not styled without cities', function(t) {
  mapboxGL.spriteStyles.forEach(function(styleName) {
    var style = require('../styles/' + styleName + '.json');
    var hasTown;
    var hasCity;
    style.layers.forEach(function(layer) {
      if(layer['source-layer'] === 'place_label') {
        // find where this filter is matched within all the styles
        hasTown = _.findWhere(model.layers, {id: 'place town'});
        // console.log(style.name + ' ' + hasTown.filter);
        hasCity = _.findWhere(model.layers, {id: 'place city'});
        // console.log(style.name + ' ' + hasCity.filter);
      }
    });
    if(hasTown !== undefined) {
      t.assert(hasCity, styleName + ' - this has town and has city');
    }
  });
  t.end();
});