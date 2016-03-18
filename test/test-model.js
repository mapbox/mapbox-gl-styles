var test = require('tape');
var mapboxGL = require('../index');
var model = require('../model-empty-style.json');
var fs = require('fs');

// test('check each style for towns styled without cites', function(t) {

// })

//mapboxGL.spriteStyles.forEach(function(styleName) {
  var style = require('../styles/' + 'streets-v8' + '.json');
  var hasTown = false;
  var count = 0;
  model.layers.forEach(function(layer) {
    var label = layer.id;
    if(label==='place-town' || label==='place city') {
       if(label=='place city') {
         console.log(layer);
       }
    }
  });
//});
