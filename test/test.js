var test = require('tape');
var mapboxGL = require('../index');
var fs = require('fs');

// check that all v7 styles exist
test('.styles v7 and v8', function(t) {
  t.test('should return all styles', function(t) {
    Object.keys(mapboxGL.styles).forEach(function(style) {
      t.ok(mapboxGL.styles[style].version, 'Check for version');
      t.ok(mapboxGL.styles[style].name, 'Check for version');
      t.ok(mapboxGL.styles[style].layers, 'Check for layers');
    });
    t.end();
  });
  t.end();
});

// check that all sprites exist
test('.sprites v8', function(t) {
  t.test('should return all v8 sprites', function(t) {
    Object.keys(mapboxGL.sprites).forEach(function(sprite) {
      t.ok(sprite.indexOf('v8') > -1);
      t.ok(mapboxGL.sprites[sprite].length > 0);
      t.ok(mapboxGL.sprites[sprite][0].id);
      t.equal(typeof mapboxGL.sprites[sprite][0].svg, 'object');
    });
    t.end();
  });
  t.end();
});

// check that sprites are properly named
test('.sprite names v8', function(t) {
  t.test('should return properly referenced sprites in v8', function(t) {
    Object.keys(mapboxGL.styles).forEach(function(stylesv8) {
      var version = mapboxGL.styles[stylesv8].version;
      var name = mapboxGL.styles[stylesv8].name;
      if (version === 8 && name !== 'Empty') {
        t.equal(mapboxGL.styles[stylesv8].sprite, 'mapbox://sprites/mapbox/' + stylesv8, 'References mapbox sprites');
      }
    });
    t.end();
  });
  t.end();
});

// check that fonts are properly named
test('.glyphs v8', function(t) {
  t.test('should return properly referenced fontstacks in v8', function(t) {
    Object.keys(mapboxGL.styles).forEach(function(stylesv8) {
      var version = mapboxGL.styles[stylesv8].version;
      if (version === 8) {
        var name = mapboxGL.styles[stylesv8].name;
        t.equal(mapboxGL.styles[stylesv8].glyphs, 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf', 'References mapbox glyphs for ' + name);
      }
    });
    t.end();
  });
  t.end();
});

// checks all maki icons against list of expected
test('.maki v8 - checks all maki icons against list of expected maki icons', function(t) {
  var styles = mapboxGL.spriteStyles;
  styles.forEach(function(style, i) {
    fs.readdir('./sprites/' + style + '/_svg', function(err, files) {
      if (err) t.fail(err);
      mapboxGL.maki.forEach(function(name) {
        t.ok(files.indexOf(name + '-11.svg') !== -1, name + '-11.svg' + ' in ' + style);
        t.ok(files.indexOf(name + '-15.svg') !== -1, name + '-15.svg' + ' in ' + style);
      });
      if (i === styles.length - 1) {
        t.end();
      }
    });
  });
});

// checks all `maki` rail icons against list of expected
var styleMaki = [];
var styleValue = [];
mapboxGL.spriteStyles.forEach(function(style, i) {
  var totalLayers = mapboxGL.styles[style].layers;
  for (var j = 0; j < totalLayers.length; j++) {
    var sourceLayer = mapboxGL.styles[style].layers[j]['source-layer'];
    if (sourceLayer === 'rail_station_label' && mapboxGL.styles[style].layers[j].layout['icon-image'] !== '{network}') {
      var iconImage =  mapboxGL.styles[style].layers[j].layout['icon-image'];
      styleMaki.push(style);
      styleValue.push(mapboxGL.styles[style].layers[j].layout['icon-image']);
    }
  }
});

// checks all layers that use an image, stores images names, checks for images in proper style folders
test('.all-image-test v8 - checks all layers that use an image, stores images names, checks for images in proper style folders', function(t) {
  // Collect each style id and each styles coors. icons into an array of objects
  var stylesWithImages = [];
  mapboxGL.spriteStyles.forEach(function(style, i) {
    var totalLayers = mapboxGL.styles[style].layers;
    var image = [];
    for (var j = 1; j < totalLayers.length; j++) {
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
          if(value.indexOf('}') === -1 && value.indexOf('{') === -1 && value.length) {
            image.push(value);
          }
        } else {
            Object.keys(value).forEach(function (key) {
              var val = value[key];
              for(k=1; k < val.length; k++) {
                if(typeof val === 'object') {
                  var theImage = val[k][1];
                  if(theImage.indexOf('}') === -1 && theImage.indexOf('{') === -1 && theImage.length) {
                    // everything that does not include }
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
    });
  });
});
