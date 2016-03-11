var test = require('tape');
var mapboxGL = require('../index');
var fs = require('fs');

// checks all layers that use an image, stores images names, checks for images in proper style folders
test('.all-image-test v8 - checks all layers that use an image, stores images names, checks for images in proper style folders', function(t) {
  // Collect each style id and each styles coors. icons into an array of objects
  var stylesWithImages = [];
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
          if(!value.includes('}') && !value.includes('{') && value.length) {
            image.push(value);
          }
        } else {
            Object.keys(value).forEach(function (key) {
              var val = value[key];
              for(k=1; k < val.length; k++) {
                if(typeof val === 'object') {
                  var theImage = val[k][1];
                  if(!theImage.includes('}') && !theImage.includes('{') && theImage.length) { // if the image has length
                    image.push(theImage);
                  }
                }
              }
            });
          }
        } // end sting if */
    } // end for loop in each layer
      stylesWithImages.push({
        style: style,
        images: image
      });
  }); // end forEach
  // loop thru check images
  stylesWithImages.forEach(function(styleWithImages, i) {
    fs.readdir('./sprites/' + styleWithImages.style + '/_svg', function(err, files) {
      if (err) t.fail(err);
      for(l=0; l < styleWithImages.images.length; l++) {
        t.ok(files.indexOf(styleWithImages.images[l] + '.svg') !== -1, styleWithImages.images[l] + '.svg' + ' in ' + styleWithImages.style);
      }
      if (i === stylesWithImages.length - 1) {
        t.end();
      }
    })
  });
});





