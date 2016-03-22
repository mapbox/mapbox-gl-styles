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
        // // find where this filter is matched within all the styles
        // hasTown = _.findWhere(model.layers, {id: 'place town'});
        // the layers in the style
        if(layer.filter.indexOf('all') && layer.filter.indexOf('==') && layer.filter.indexOf('type') && layer.filter.indexOf('town')) {
          console.log(layer);
        }
      }
    });
    if(hasTown !== undefined && hasTown.filter) {
      t.assert(hasCity, styleName + ' - this has town and has city');
    }
  });
  t.end();
});


// does `Object.values()` work as well as `Object.keys()` it's experimental
// finding a layer that contains `type` could still be `!==`, need to find 3 words not one

/* when an object contains an object value what is the process for accessing it? like not `model.layers.filter` for:
   {
      "filter":[
        "==",
        "type",
        "town"
      ],
      "type":"symbol",

      "id":"place town",
      "source-layer":"place_label"
    }
*/