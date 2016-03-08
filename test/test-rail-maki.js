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
var styleMaki = [];
var styleValue = [];
mapboxGL.spriteStyles.forEach(function(style, i) {
  var totalLayers = mapboxGL.styles[style].layers;
  for(var i=0; i < totalLayers.length; i++) {
    var sourceLayer = mapboxGL.styles[style].layers[i]['source-layer'];
    if(sourceLayer === 'rail_station_label' && mapboxGL.styles[style].layers[i].layout['icon-image'] !== '{network}') {
      var iconImage =  mapboxGL.styles[style].layers[i].layout['icon-image'];
      styleMaki.push(style);
      styleValue.push(mapboxGL.styles[style].layers[i].layout['icon-image']);
    }
  }
});
for(var i=0; i < styleMaki.length; i++) {
  test('.rail v8 (maki) - checks all maki rail icons against list of expected', function(t) {
    styleMaki.forEach(function(style, j) {
      fs.readdir('./sprites/' + style + '/_svg', function(err, files) {
        if (err) t.fail(err);
        railMaki.forEach(function(name, k) {
          if(styleValue[j] === '{maki}-11') {
            t.ok(files.indexOf(name + '-11.svg') !== -1, name + '-11.svg' + ' in ' + style);
          }
          if(styleValue[j] === '{maki}-15') {
            t.ok(files.indexOf(name + '-15.svg') !== -1, name + '-15.svg' + ' in ' + style);
          }
          if(styleValue[j] === '{maki}') {
            t.ok(files.indexOf(name + '.svg') !== -1, name + '.svg' + ' in ' + style);
          }
        });
        if(i === styleMaki.length) {
          t.end();
        }
      });
    });
  });
}