var test = require('tape');
var match = require('./recursive-style-finder.js').match;


var filterarray1 = ['a','b',['v','z']];
var filterarray3 = ['a','b','v'];
var filterarray4 = ['a',['b','v']];


var filterarray5 = ['a',['b','v'], 'x', 'y', ['z']];

var filterarray666 = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[['z']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];

var key = 'z';


test('evil nested array', function(assert) {
var filterarray666 = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[['z']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];
  assert.equal(match(filterarray666, 'z'), true, 'should find z in hell array and return true');
  assert.end();
});

test('filterarray2', function(assert){
var filterarray2 = ['a','b','v','z'];
var key = 'z';

	assert.equal(match(filterarray2, key), true, 'should find z in top-level array and return true');
	assert.end();
});

test('filterarray3', function(assert){
var filterarray3 = ['a','b','v'];
var key = 'z';
	assert.equal(match(filterarray3,key), false, 'should not find z in top level array');
	assert.end();
});

test('filterarray1',function(assert){
var filterarray1 = ['a','b',['v','z']];
var key = 'z';
	assert.equal(match(filterarray1,key),true, 'should find z and return true');
	assert.end();
});

test('filterarray4',function(assert){
var filterarray4 = ['a',['b','v']];
var key = 'z';
	assert.equal(match(filterarray4,key),false,'should not find z in nested array and return false');
	assert.end();
});

test('filterarray5',function(assert){
var filterarray5 = ['a',['b','v'], 'x', 'y', ['z']];
var key = 'z';
	assert.equal(match(filterarray5,key),true,'should find z in second nested array and return true');
	assert.end();
});



test('filterarray5',function(assert){
var filterarray1 = ['a','b',['v','z']];
	assert.equal(match(filterarray1,'v') && match(filterarray1,"b") && match(filterarray1,"a") && match(filterarray1,'v'),true,'should find z in second nested array and return true');
	assert.end();
});
