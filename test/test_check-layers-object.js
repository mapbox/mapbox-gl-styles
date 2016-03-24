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
        // does this have a ref layer?
        if(match && match.ref) {
          console.log('  TEST ' + match.ref);
          match = model.layers.filter(function(model_layer) {
            return model_layer.key === layer.id;
          })[0];
        } else {
          // compare the filter values
          match = model.layers.filter(function(model_layer) {
            return model_layer.id === layer.id;
          })[0];
        }
        // now verify the layers have matching filter values
        if(match) {
          var keys = Object.keys(match);
          keys.forEach(function(key) {
            //t.same(match[key], layer[key], 'This layer passes.');
          });
          console.log('The style has ' + layer.id);
        }
      }
    });

  // now check we have the 2nd layer we are looking for
  style.layers.forEach(function(layer) {
    if(layer.id === checkLayer) {
      // does this have a ref layer?
      if(check && check.ref) {
        check = model.layers.filter(function(model_layer) {
          return model_layer.key === layer.id;
        })[0];
      } else {
      // if we have a match, save the value
        check = model.layers.filter(function(model_layer) {
          return model_layer.id === layer.id;
        })[0];
      }
      // now verify the layers have matching filter values
      if(check) {
        var keys = Object.keys(check);
        keys.forEach(function(key) {
          //t.same(check[key], layer[key], 'This layer passes.');
        });
        console.log('This style also has ' + layer.id);
      }
    }
  });

    // if there is no match, then tell me
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






