var fs = require('fs');
var files = process.argv;
var inputFile = process.argv[2];
var outputFile = process.argv[3];
console.log(files);


var inStyle = fs.readFileSync(inputFile, 'utf8');
var inputStyle = JSON.parse(inStyle);

var newTunnelMinorFilter = [
	"all",
	[
		"==",
		"structure",
		"tunnel"
	],
	[
		"in",
		"class",
		"motorway_link",
		"street",
		"street_limited",
		"service",
		"path",
		"pedestrian",
		"track"
	]
];

var newTunnelMajorFilter = [
  "all",
  [
    "==",
    "structure",
    "tunnel"
  ],
  [
    "in",
    "class",
    "motorway",
    "trunk",
    "primary",
    "secondary",
    "tertiary"
  ]
];

inputStyle.sources.mapbox.url = "mapbox://mapbox.mapbox-streets-v7";
var layers = inputStyle.layers;

layers.forEach (function(layer){
	console.log(layer.id);
	if (layer["source-layer"] === "tunnel"){
		layer.filter = newTunnelMinorFilter;
	}
	if (layer.id == "tunnel_major"){
		layer.filter = newTunnelMajorFilter;
	}
	if (layer["source-layer"] === "bridge" && layer["filter"][2].indexOf("street") != -1){
	layer.filter = "blooaop";
	}
});

// layers.each do |layer|
//   layer.filter = 'adsfafsd'
// end


var outputStyle = JSON.stringify(inputStyle, null, 2);
fs.writeFileSync(outputFile, outputStyle,'utf8');

console.log(inputStyle.sources.mapbox.url);


