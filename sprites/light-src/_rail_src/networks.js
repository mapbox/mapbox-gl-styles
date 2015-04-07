#!/usr/bin/env node

var argv = process.argv;
var util = require('util');
var path = require('path');
var fs = require('fs');

if (!argv[2] || argv[2].split('.').length < 2) {
    console.warn('Example: networks.js london-underground.national-rail');
    process.exit(1);
}

var base = {};
var networks = argv[2].split('.').reduce(function(memo, network) {
    [12,18,24].forEach(function(size) {
        memo[size] = memo[size] || {};
        memo[size][network] = fs.readFileSync(__dirname + '/' + util.format('%s-%s.svg', network, size), 'utf8');
        base[size] = base[size] || memo[size][network];
    });
    return memo;
}, {});

[12,18,24].forEach(function(size) {
    var lines = base[size].split('\n');
    var head = [];
    var body = [];
    var tail = [];
    var open = false;

    if (!lines.length) return;

    // Builds up SVG head + tail from base SVG, excluding body.
    // Modifies SVG width to be multiple of base width.
    var line = lines.shift();
    while (!/<g/.test(line)) {
        var match = line.match(/width="([0-9]+)"/);
        if (match) {
            if (parseInt(match[1],10) !== size) throw new Error('Base svg width does not match size ' + size + '.');
            line = line.replace(size, size * Object.keys(networks[size]).length);
        }
        head.push(line);
        line = lines.shift();
    }
    while (!/<\/g/.test(line)) line = lines.shift();
    while (lines.length) tail.push(lines.shift());

    // Iterate through network SVGs retrieving first layer contents.
    Object.keys(networks[size]).forEach(function(network, l) {
        var lines = networks[size][network].split('\n');
        var line = lines.shift();
        var firstTr;
        var firstId;
        var match;
        while (!/<g/.test(line)) line = lines.shift();
        while (!/<\/g/.test(line)) {
            if (!firstTr && (match = line.match(/transform="translate\(([^,]+),[^\)]+\)"/))) {
                firstTr = true;
                line = line.replace(match[1], parseInt(match[1],10) + size*l);
            }
            if (!firstId && (match = line.match(/id="([^"]+)"/))) {
                firstId = true;
                line = line.replace(match[1], 'layer' + l);
            }
            body.push(line);
            line = lines.shift();
        }
        body.push(line);
    });

    var output = head.concat(body).concat(tail).join('\n');
    fs.writeFileSync(__dirname + '/' + util.format('%s-%s.svg', Object.keys(networks[size]).join('.'), size), output);
});
