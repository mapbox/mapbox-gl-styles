var test = require('tape');
var fs = require('fs');
var neatCSV = require('neat-csv');
// https://github.com/sindresorhus/neat-csv

test('icons exist', function(assert) {
  neatCSV(fs.readFileSync('streets_v7.csv', 'utf8'), function(err, data) {
    // ok we have data here
    data.forEach(function(d) {
      // assert something given d, like
      assert.ok(fs.existsSync('../sprites/streets-v8/_svg/'+d.filename), 'filename: '+d.filename+' exists');
    });

    // tell tape it's done
    assert.end();
  });
});