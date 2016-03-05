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
      if(sourceLayer === 'rail_station_label' && mapboxGL.styles[style].layers[i].layout['icon-image'] !== '{network}') {
        // let's make sure we are looking only in the rail_station_label of a specific style
        var iconImage =  mapboxGL.styles[style].layers[i].layout['icon-image'];
        //console.log(sourceLayer + ' is using ' + iconImage + ' in ' + style);
        styleMaki.push(style);
        styleValue.push(mapboxGL.styles[style].layers[i].layout['icon-image']);
        //console.log(styleMaki.length);
      }
    }
  });
///*
  for(var i=0; i < styleMaki.length; i++) {
    var style = styleMaki[i];
    var maki = styleValue[i];
    //console.log(styleValue[i] + ' is in ' + styleMaki[i]);

    // MAKE SURE THE MAKI IS IN THE RIGHT STYLE
    if(style == styleMaki[i] && maki == styleValue[i]) {
      console.log('only check ' + style + ' for the ' + maki + ' files.');
      //console.log(maki);
      //console.log(style);
      fs.readdir('./sprites/' + style + '/_svg', function(err, files) {
        //console.log('only check ' + style + ' for the ' + maki + ' files.');
        t.plan(files.length); // solves asynchronous issue
        //console.log('./sprites/' + style + '/_svg');
        for(var j=0; j < styleMaki.length; j++) {
          console.log('find ' + styleValue[j] + ' in ' + styleMaki[j]);
          // not checking the list yet
          if (err) t.fail(err);
          railMaki.forEach(function(name) {
            //console.log(styleValue[j]);
            if(styleValue[j] === '{maki}-11') {
              t.ok(files.indexOf(name + '-11.svg') !== -1, name + '-11.svg' + ' in ' + style);
              //console.log('check ' + style + ' for the ' + maki + ' files.');
            }
          });
        }
      });
        //console.log("READING PATH: " + './sprites/' + style + '/_svg');
      //
        /*
          if(maki == '{maki}-15') {
            t.ok(files.indexOf(name + '-15.svg') !== -1, name + '-15.svg' + ' in ' + style);
            console.log('check ' + style + ' for the ' + maki + ' files.');
          }
          if(maki == '{maki}') {
            t.ok(files.indexOf(name + '.svg') !== -1, name + '.svg' + ' in ' + style);
            console.log('check ' + style + ' for the ' + maki + ' files.');
          }*/
    }
  }
});

