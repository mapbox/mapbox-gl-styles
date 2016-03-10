var test = require('tape');
var mapboxGL = require('../index');
var fs = require('fs');

// checks all layers that use an image, stores images names, checks for images in proper style folders
test('.all-image-test v8 - checks all layers that use an image, stores images names, checks for images in proper style folders', function(t) {
  var styleName = []; // an array to hold the styles that have ^^
  var imageName = [];
  var imageObject = {};
  mapboxGL.spriteStyles.forEach(function(style, i) {
    styleName.push(style);
    var totalLayers = mapboxGL.styles[style].layers;
    for(j=1; j < totalLayers.length; j++) {
      var sourceLayer = mapboxGL.styles[style].layers[j]['source-layer'];
      var layerType = mapboxGL.styles[style].layers[j].type;
      if(layerType === 'background' && mapboxGL.styles[style].layers[j].paint['background-pattern'] !== undefined) {
        imageName.push(mapboxGL.styles[style].layers[j].paint['background-pattern']);
        styleName.push(style);
      }
      if(layerType === 'line' && mapboxGL.styles[style].layers[j].paint['line-pattern'] !== undefined) {
          imageName.push(mapboxGL.styles[style].layers[j].paint['line-pattern']);
          styleName.push(style);
      }
      // pull all string values set in this object, because they could be anything
      if(mapboxGL.styles[style].layers[j].layout !== undefined && mapboxGL.styles[style].layers[j].layout['icon-image'] !== undefined) {
        // make sure layout is defined and 'icon-image' is set ^^
        var value = mapboxGL.styles[style].layers[j].layout['icon-image'];
        if(typeof value === 'string') {
          if(value.includes('{maki}') || value.includes('{reflen}')) { // does this include the maki or reflen tokens
            if(value !== '{maki}-11' && value !== '{maki}-15' && value !== '{maki}' && value !== '') {
              // console.log(style + ' is using ' + value);
              imageObject = {
                style: style,
                image: value
              };
            }
          }
            imageName.push(value);
            styleName.push(style);
        } else {
          Object.keys(value).forEach(function (key) {
            var val = value[key];
            for(k=0; k < val.length; k++) {
              if(typeof val === 'object') {
                imageName.push(val[k][1]);
                styleName.push(style);
              }
            }
          });
        }
        console.log(imageObject);
      } // end pull string values if stmt
    } // end for all layers loop
  });
  imageName.forEach(function(image, l) {
    fs.readdir('./sprites/' + styleName[l] + '/_svg', function(err, files) {
      if (err) t.fail(err);
      if(image !== '{maki}-11' && image !== '{maki}-15' && image !== '{shield}-{reflen}' && image !== '{network}') { // don't search for maki, sheild, or rail icons
            t.ok(files.indexOf(image + '.svg') !== -1, image + '.svg' + ' in ' + styleName[l]);
          }
      });
      if (l === imageName.length - 1) {
        t.end();
      }
    });
});