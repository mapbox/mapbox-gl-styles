var test = require('tape');
var mapboxGL = require('../index');
var fs = require('fs');

// checks all layers that use an image, stores images names, checks for images in proper style folders
test('.all-image-test v8 - checks all layers that use an image, stores images names, checks for images in proper style folders', function(t) {
  var styleName = []; // an array to hold the styles that have ^^
  var imageName = [];
  mapboxGL.spriteStyles.forEach(function(style, i) {
    styleName.push(style);
    var totalLayers = mapboxGL.styles[style].layers;
    // how many layers in which style
    for(j=0; j < totalLayers.length; j++) {
      var sourceLayer = mapboxGL.styles[style].layers[j]['source-layer'];
      var layerType = mapboxGL.styles[style].layers[j].type;
      if(layerType === 'background' && mapboxGL.styles[style].layers[j].paint['background-pattern'] !== undefined) {
        // are all style properties declared but have no value assigned?? ^^
        imageName.push(mapboxGL.styles[style].layers[j].paint['background-pattern']);
        styleName.push(style);
      }
      if(layerType === 'line' && mapboxGL.styles[style].layers[j].paint['line-pattern'] !== undefined) {
          imageName.push(mapboxGL.styles[style].layers[j].paint['line-pattern']);
          styleName.push(style);
      }
      // pull all string values set in this object, because they could be anything
      if(mapboxGL.styles[style].layers[j].layout['icon-image'] !== undefined) {
        console.log(mapboxGL.styles[style].layers[j].layout['icon-image']);
      }
      /*if(mapboxGL.styles[style].layers[j].layout['icon-image'] !== undefined) { // if this is set in the style
        var value = mapboxGL.styles[style].layers[j].layout['icon-image'];
        // check which type array or object is set in this style
        if(typeof value === 'string') {
          Object.keys(value).forEach(function (key) {
          var val = value[key];
          console.log(val);
        })
        }
      }*/
    }
  });
  t.end();
});