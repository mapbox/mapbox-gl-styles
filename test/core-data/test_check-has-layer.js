/*
This test checks to make sure bridge, tunnel, and disputed boundaries are styled in each style's .json.
It specifically checks that '==' and 'structure' values are set in the data filter, and then checks
the order of the array to ensure that the style is including either 'bridge' or 'tunnel'. For 'ford'
value, the test checks that the style is not excluding 'ford' values in it's filter.

The disputed styling test confirms that '==' and 'admin_level' are included in data 'fitler',
then checks that index of the 'disputed' value sets '==' before it and '1' after it. Indicating that
disputed boundaries are styled in the filter.
*/

var _ = require('underscore-node');
var test = require('tape');
var mapboxGL = require('../../index');

mapboxGL.checkStyles.forEach(function(styles) {
  var style = require('../../styles/' + styles + '.json');
  var foundBridge = false;
  var foundTunnel = false;
  var includeFord = true;
  var hasDisputed = false;
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
        } // check that ford is not excluded
        if(flatArray[inList-1] === '!in' && flatArray[inList-1] !== '==' && flatArray[inList+1] === 'ford' || flatArray[inList+2] == 'ford' || flatArray[inList+2] == 'ford') {
          includeFord = false;
        }
      }
      // check for disputed styling
      var hasEquals = _.contains(flatArray, '==');
      var hasAdmin = _.contains(flatArray, 'admin_level');
      if(hasEquals && hasAdmin) {
        var inList = _.indexOf(flatArray, 'disputed');
        if(flatArray[inList-1] === '==' && flatArray[inList+1] === 1) {
          console.log(flatArray);
          hasDisputed = true;
        }
      }
    }); // end layer loop
    assert.ok(foundBridge,'Check bridge styling.');
    assert.ok(foundTunnel,'Check tunnel styling.');
    assert.ok(includeFord,'Check ford styling.');
    assert.ok(hasDisputed,'Check disputed boundary styling.');
    assert.end();
  }); // end test
}); // end style loop