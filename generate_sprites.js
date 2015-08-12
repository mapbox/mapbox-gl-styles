var fs = require('fs'),
  glob = require('glob'),
  path = require('path'),
  spritezero = require('spritezero');

var styles = [
  'mapbox.streets-v7',
  'mapbox.light-v7',
  'mapbox.dark-v7',
  'mapbox.bright-v7',
  'mapbox.basic-v7',
  'mapbox.empty-v7'
];

function getFiles(style) {
  return glob.sync(path.resolve(path.join(__dirname, '/sprites/' + style + '/_svg/*.svg')))
    .map(function(im) {
      return {
        svg: fs.readFileSync(im),
        id: path.basename(im).replace('.svg', '')
      };
    }).sort(function(a, b) {
      return b.id < a.id;
    });
}

function writeToFile(style, format, type, file) {
  var dir = './sprites/' + style + '/sprite@' + format + 'x.' + type;
  fs.writeFile(dir, file, function(err) {
    if (err) console.log(err);
    else console.log(dir);
  });
}

styles.forEach(function(style) {
  [1, 2].forEach(function(format) {
    var json = spritezero.generateLayout(getFiles(style), format);
    spritezero.generateImage(json, function(err, png) {
      if (err) console.log(err);
      writeToFile(style, format, 'json', json);
      writeToFile(style, format, 'png', png);
    });
  });
});
