var _ = require('underscore-node');
var test = require('tape');
var model = require('../model-streets-style.json');
// pass in json files
var style = require('../styles/streets-v8.json');

// the function that does the work
function styled(hasLayer, checkLayer) {
  // loop thru every layer in the style!

  var match;
  var check;

  style.layers.forEach(function(layer) {

    // find the first layer we are checking for
    if(layer.id === hasLayer) {

      // compare the filter values
      match = model.layers.filter(function(model_layer) {
        return model_layer.id === layer.id;
      })[0];
      console.log('The style has ' + match.id);
    }

      // check if this layer has the 2nd layer we are checking for
    if(layer.id === checkLayer) {
      check = model.layers.filter(function(model_layer) {
        return model_layer.id === layer.id;
      })[0];
      console.log('This style also has ' + check.id);
    }
  });
  if(match === undefined) {
    console.log('There is no layer called ' + hasLayer);
  }
  if(check === undefined) {
    console.log('There is no layer called ' + checkLayer);
  }
}

// run function to check for layers
styled('road_motorway', 'road_motorway_link');