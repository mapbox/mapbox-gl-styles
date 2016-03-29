var _ = require('underscore-node');
var test = require('tape');
// pass in objects
var model = require('../core_model-style.json');
var mapboxGL = require('../../index');
var compareLayers = require('../core_layer-compare.json');

mapboxGL.checkStyles.forEach(function(styles) {
  var style = require('../../styles/' + styles + '.json');
  var modelIndexbyID = _.indexBy(model.layers, 'id'); // sort model layers by it's id (so we can search it)
  var styleIndexbyID = _.indexBy(style.layers, 'id'); // sort style layers by id
  // loop thru all the group layers and compare
  compareLayers[style.name].forEach(function(testLayer) {
    test('### Check layer dependencies in: ' + style.name, function(assert) {
      var modelID = modelIndexbyID[testLayer.hasLayer];
      var styleID = styleIndexbyID[testLayer.hasLayer];
      if(styleID === undefined || modelID === undefined) {
        // can you tell the error what to see for ok vs. not ok?
        assert.fail('check that layer id: ' + testLayer.hasLayer + ' exists in ' + style.name);
      } else {
        // check if the model has a ref to check
        if(styleID.ref) {
          modelID = modelIndexbyID[styleID.ref].filter;
          styleID = styleIndexbyID[styleID.ref].filter;
        }
        assert.deepEqual(modelID.filter, styleID.filter, 'has ' + testLayer.hasLayer + ', must have ' + testLayer.checkLayer);
        // find the check layer based on the layer name passed in checkLayer
        var modelIDCheck = modelIndexbyID[testLayer.checkLayer];
        var styleIDCheck = styleIndexbyID[testLayer.checkLayer];
        // check if the model has a ref to check
        if(styleIDCheck === undefined || modelIDCheck === undefined) {
          assert.fail('check that layer id: ' + testLayer.checkLayer + ' exists in ' + style.name);
        } else {
          if(styleIDCheck.ref) {
            modelIDCheck = modelIndexbyID[styleIDCheck.ref].filter;
            styleIDCheck = styleIndexbyID[styleIDCheck.ref].filter;
          }
          assert.deepEqual(modelIDCheck.filter, styleIDCheck.filter, 'has both ' + testLayer.checkLayer + ' and  ' + testLayer.hasLayer);
        }
      }
      // end assertion
      assert.end();
    });
  });
});