/*

LOOPS THRU EACH LAYER OF EACH STYLE AND MATCHES LAYER ID IN STYLE WITH LAYER ID IN MODEL STYLE
IF LAYER HAS REF, LOOPS THRU EACH LAYER WITH REF AND ADDS THE REF TO THE MATCH OBJECT
FINALLY THE MATCH OBJECT RETURNS THE VALUES FOR EACH KEY COMPARING BETWEEN STYLE AND MODEL STYLE

*/


var test = require('tape');
var model = require('../model-streets-style.json');

test('compare values in model and style with the same id', function(t) {
  var style = require('../styles/streets-v8.json');

  // loop thru every layer in style and run this function
  style.layers.forEach(function(layer) {

    // in this layer does the filter have the same id as the model? if so, return the layer
    var match = model.layers.filter(function(model_layer) {
      return model_layer.id === layer.id;
    })[0];

    // in this layer with matching id, does it set a ref
    if(match && match.ref) {
      match = model.layers.filter(function(model_layer) {
        return model_layer.key === layer.id;
      })[0];
    }

    // within all the matches check to see if they match the expected filter
    if(match) {
      var keys = Object.keys(match);
      keys.forEach(function(key) {
        t.same(match[key], layer[key], 'Each object in this layer is a complete match.');
      });
    }
  });
  t.end();