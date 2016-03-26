var _ = require('underscore-node');
var test = require('tape');
// pass in objects
var model = require('../model-style.json');
var style = require('../styles/streets-v8.json');
var compareLayers = require('../layer-test-object.json');

test('check if layer ___ exists, layer ____ also exists', function(assert) {
  var modelIndexbyID = _.indexBy(model.layers, 'id'); // sort model layers by it's id (so we can search it)
  var styleIndexbyID = _.indexBy(style.layers, 'id'); // sort style layers by id

  // loop thru all the group layers and compare
  compareLayers.group.forEach(function(testLayer) {
    var model = modelIndexbyID[testLayer.hasLayer];
    var style = styleIndexbyID[testLayer.hasLayer];
    // check if the model has a ref to check
    if(model.ref) {
      model = modelIndexbyID[model.ref].filter;
      style = styleIndexbyID[style.ref].filter;
    }
    assert.deepEqual(model.filter, style.filter, 'do these filters match');
  });
  // end assertion
  assert.end();
});