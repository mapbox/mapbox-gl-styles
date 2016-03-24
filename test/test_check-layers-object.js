var _ = require('underscore-node');
var test = require('tape');
var model = require('../model-streets-style.json');
// pass in json files
var style = require('../styles/streets-v8.json');

// write an object
var layerTesting = {
  // key: value pairs
  group: [
  // a value that is an array of objects
    {
      hasLayer: 'parks',
      checkLayer: 'national_park'
    },
    {
      hasLayer: 'road-motorway',
      checkLayer: 'road-motorway_link'
    },
    {
      hasLayer: 'road-primary',
      checkLayer: 'road-primary_link'
    },
    {
      hasLayer: 'road-secondary',
      checkLayer: 'road-secondary_link'
    },
    {
      hasLayer: 'road-trunk',
      checkLayer: 'road-trunk_link'
    },
    {
      hasLayer: 'place-town',
      checkLayer: 'place-city'
    }
  ]
};

// pass in layers to test
layerTesting.group.forEach(function(testLayer) {

  console.log('do we have ' + testLayer.hasLayer + ' or ' + testLayer.checkLayer + '???');

  // the function that does the work -- loop thru every layer in the style!
  function styled(hasLayer, checkLayer) {
    var match;
    var check;

    // find the first layer we are checking for
    style.layers.forEach(function(layer) {
      if(layer.id === hasLayer) {
        // compare the filter values
        match = model.layers.filter(function(model_layer) {
          return model_layer.id === layer.id;
        })[0];
        console.log('The style has ' + layer.id);
      }
    });

    // check if this layer has the 2nd layer we are checking for
    style.layers.forEach(function(layer) {
      if(layer.id === checkLayer) {
        check = model.layers.filter(function(model_layer) {
          return model_layer.id === layer.id;
        })[0];
        console.log('This style also has ' + layer.id);
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
  styled(testLayer.hasLayer, testLayer.checkLayer);
});






