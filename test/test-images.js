var test = require('tape');
var mapboxGL = require('../index');
var fs = require('fs');

// checks all layers that use an image, stores images names, checks for images in proper style folders
test('.all-image-test v8 - checks all layers that use an image, stores images names, checks for images in proper style folders', function(t) {
  var checkImages = [];
  mapboxGL.spriteStyles.forEach(function(style, i) {
    var totalLayers = mapboxGL.styles[style].layers;
    var image = [];
    for(j=1; j < totalLayers.length; j++) {
      var sourceLayer = mapboxGL.styles[style].layers[j]['source-layer'];
      var layerType = mapboxGL.styles[style].layers[j].type;
      if(layerType === 'background' && mapboxGL.styles[style].layers[j].paint['background-pattern'] !== undefined) {
        image.push(mapboxGL.styles[style].layers[j].paint['background-pattern']);
      } else if(layerType === 'line' && mapboxGL.styles[style].layers[j].paint['line-pattern'] !== undefined) {
          image.push(mapboxGL.styles[style].layers[j].paint['line-pattern']);
        }
      // pull all string values set in this object, because they could be anything
      if(mapboxGL.styles[style].layers[j].layout !== undefined && mapboxGL.styles[style].layers[j].layout['icon-image'] !== undefined) {
        var value = mapboxGL.styles[style].layers[j].layout['icon-image'];
        if(typeof value === 'string') {
          if(value.includes('{maki}') || value.includes('{reflen}') || value.includes('{network}')) {
            // skip if they include {maki} or {reflen} tokens
          } else { image.push(value); }
        } else {
            Object.keys(value).forEach(function (key) {
              var val = value[key];
              for(k=1; k < val.length; k++) {
                if(typeof val === 'object') {
                  var theImage = val[k][1];
                  image.push(theImage);
                }
              }
            });
          }
        } // end sting if */
    } // end for loop in each layer
      checkImages.push({
        style: style,
        images: image
      });
  }); // end forEach
  console.log(checkImages.style);/*
  checkImages.image.forEach(function(image, l) {
    fs.readdir('./sprites/' + checkImages.styleName[l] + '/_svg', function(err, files) {
      if (err) t.fail(err);
      if(image !== '{maki}-11' && image !== '{maki}-15' && image !== '{shield}-{reflen}' && image !== '{network}') { // don't search for maki, sheild, or rail icons
            t.ok(files.indexOf(image + '.svg') !== -1, image + '.svg' + ' in ' + styleName[l]);
          }
      });
      if (l === imageName.length - 1) {*/
        t.end();
      //}
    //});
});





