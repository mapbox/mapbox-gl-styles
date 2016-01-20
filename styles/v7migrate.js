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


function searchNested(filterarray, key) {
  if (filterarray.indexOf(key) != -1) {
    return true;
  }
  else {
    for (var i=0; i<filterarray.length; i++){
      var filtervalue = filterarray[i];
      if (Array.isArray(filtervalue)) {
        console.log(filtervalue);
        var diditmatch = searchNested(filtervalue, key);
        if (diditmatch === true) {
          return true;
        }
      }
    }
    return false;
  }
}






layers.forEach (function(layer){
	console.log(layer.id);
  var filterarray = layer.filter;
  console.log(filterarray);
    if (layer["source-layer"]==="tunnel" && searchNested(filterarray, "street") && searchNested(filterarray,"==")){
      layer.filter = newTunnelMinorFilter;
    }

// 	if (layer["source-layer"] === "tunnel" && layer["filter"][2].
// 	if (layer["source-layer"] === "bridge" && layer["filter"].indexOf("street") != -1){
// 	layer.filter = [
//                 "all",
//                 [
//                     "!in",
//                     "structure",
//                     "tunnel",
//                     "bridge"
//                 ],
//                 [
//                     "==",
//                     "class",
//                     "street"
//                 ]
//             ];
// 	}
});



var outputStyle = JSON.stringify(inputStyle, null, 2);
fs.writeFileSync(outputFile, outputStyle,'utf8');

console.log(inputStyle.sources.mapbox.url);


