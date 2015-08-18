var fs = require('fs'),
  glob = require('glob'),
  path = require('path'),
  spritezero = require('spritezero');

var styles = [
  'streets-v8',
  'light-v8',
  'dark-v8',
  'bright-v8',
  'basic-v8',
  'bright-v8',
  'empty-v8',
  'satellite-hybrid-v8'
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
  var dir = './sprites/' + style + '/sprite' + (format > 1 ? '@' + format + 'x' : '') + '.' + type;
  fs.writeFile(dir, file, function(err) {
    if (err) console.log(err);
    else console.log(dir);
  });
}

styles.forEach(function(style) {
  [1, 2].forEach(function(format) {
    var files = getFiles(style);
    var layout = spritezero.generateLayout(files, format);
    var layoutForRenderer = spritezero.generateLayout(files, format, true);
    spritezero.generateImage(layout, function(err, png) {
      if (err) console.log(err);
      writeToFile(style, format, 'png', png);
      writeToFile(style, format, 'json', JSON.stringify(layoutForRenderer, null, 2));
    });
  });
});
