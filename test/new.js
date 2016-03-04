var test = require('tape');
var mapboxGL = require('../index');
var fs = require('fs');
var railMaki = [
  'rail',
  'rail-metro',
  'rail-light',
  'entrance'
];

// checks all `maki` rail icons against list of expected
test('.rail v8 (maki) - checks all maki rail icons against list of expected', function(t) {
  var styleMaki = [];
  var styleValue = [];
  mapboxGL.spriteStyles.forEach(function(style, i) {
    var totalLayers = mapboxGL.styles[style].layers;
    for(var i=0; i < totalLayers.length; i++) {
      var sourceLayer = mapboxGL.styles[style].layers[i]['source-layer'];
      if(sourceLayer === 'rail_station_label'
        && mapboxGL.styles[style].layers[i].layout['icon-image'] !== null
        && mapboxGL.styles[style].layers[i].layout['icon-image'] !== '{network}') {
          styleMaki.push(style);
          styleValue.push(mapboxGL.styles[style].layers[i].layout['icon-image']);
      }
    }
  });
  var counter = 0;
  for(var i=0; i < styleMaki.length; i++) {
    fs.readdir('./sprites/' + styleMaki[i] + '/_svg', function(err, files) {
      if (err) t.fail(err);
      counter ++;
      railMaki.forEach(function(name) {
        var s = ['{maki}-11.svg','{maki}-15','{maki}'];
        if(files.indexOf(name + '-11.svg') !== -1 || files.indexOf(name + '-15.svg') !== -1 || files.indexOf(name + '.svg') !== -1) {
          t.ok(files.indexOf(name + '-11.svg') !== -1, name + '-11.svg' + ' in ' + style);
          t.ok(files.indexOf(name + '-15.svg') !== -1, name + '-15.svg' + ' in ' + style);
          t.ok(files.indexOf(name + '.svg') !== -1, name + '.svg' + ' in ' + style);
        }
      });
      if (counter === styleMaki.length) {
        t.end();
        console.log('done');
      }
    });
  }
});
