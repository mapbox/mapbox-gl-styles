var _ = require('underscore-node');
var test = require('tape');
// pass in objects
// var model = require('../model-style.json');
var mapboxGL = require('../index');

mapboxGL.checkStyles.forEach(function(styles) {
  var style = require('../styles/' + styles + '.json');
  var foundBridge = false;
  var foundTunnel = false;
  var foundFord = false;
  test('### Check for mandatory layer styling in : ' + style.name, function(assert) {
    // loop thru all the layers
    style.layers.forEach(function(testLayer) {
      var flatArray = _.flatten(testLayer.filter);
      // pre-check for structure and ==
      var hasEquals = _.contains(flatArray,  '==');
      var hasStructure = _.contains(flatArray,  'structure');
      if(hasEquals & hasStructure) { // if we have structure and equals, what is before structure?
        var inList = _.indexOf(flatArray, 'structure');
        if(flatArray[inList-1] !== '!in' && flatArray[inList-1] === '==' && flatArray[inList+1] === 'bridge' || flatArray[inList+2] === 'bridge') {
          // if it's not '!in' is == and bridge is either next or after next, it must be bridge
          foundBridge = true;
        } if(flatArray[inList-1] !== '!in' && flatArray[inList-1] == '==' && flatArray[inList+1] == 'tunnel' || flatArray[inList+2] == 'tunnel') {
          // if it's not '!in' is == and bridge is either next or after next, it must be bridge
          foundTunnel = true;
        }
      }
    }); // end layer loop
    assert.ok(foundBridge,'Looking for bridge styling...');
    assert.ok(foundTunnel,'Looking for tunnel styling...');
    assert.end();
  }); // end test
}); // end style loop