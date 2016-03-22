var test = require('tape');
var model = require('../model-streets-style.json');

test('compare values in model and style with the same id', function(t) {
  var style = require('../styles/streets-v8.json');
  style.layers.forEach(function(layer) {
    var match = model.layers.filter(function(model_layer) {
      if(typeof layer.ref === 'string') {
        return model_layer.id === layer.ref;
      } else {
        return model_layer.id === layer.id;
      }
    })[0];
    if(match) {
      var keys = Object.keys(match);
      keys.forEach(function(key) {
        t.same(match.filter, layer.filter);
      });
    }
  });
  t.end();
});