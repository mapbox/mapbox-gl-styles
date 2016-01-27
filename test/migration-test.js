var test = require('tape');
var match = require('./recursive-style-finder.js').match;

test('evil nested array', function(assert) {
var filterarray666 = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[['z']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];
  assert.equal(match(filterarray666, 'z'), true, 'should find z in hell array and return true');
  assert.end();
});