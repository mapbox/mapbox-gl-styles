var _ = require('underscore-node');
var test = require('tape');
// pass in objects
// var model = require('../model-style.json');
var mapboxGL = require('../index');

mapboxGL.checkStyles.forEach(function(styles) {
  var style = require('../styles/' + styles + '.json');
  var found = false;
  test('### Check for mandatory layer styling in : ' + style.name, function(assert) {
    // loop thru all the layers
    style.layers.forEach(function(testLayer) {
      var flatArray = _.flatten(testLayer.filter);
      var has = _.contains(flatArray, 'tunnel');
      var has1 = _.contains(flatArray,  '==');
      var has2 = _.contains(flatArray,  'structure');
      if(has & has1 && has2) {
        if(flatArray[0] === 'all' && flatArray[1] === '==' && flatArray[2] === 'structure') {
          console.log(testLayer.id);
          found = true;
        }
      }
    });
    assert.ok(found,'Looking for tunnel styling...');
    assert.end();
  });
});