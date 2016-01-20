var test = require('tape');
var match = require('./path/to/function');

test('evil nested array', function(assert) {
var filterarray666 = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[['z']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];
  assert.equal(match(array, 'z'), true, 'should find z in hell array and return true');
  assert.end();
});