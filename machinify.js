var fs = require('fs')

//name of file downloaded from Studio, taken from CLI
var inputFile = process.argv[2];

//keys to remove
var keysToDelete = ['center', 'zoom', 'bearing', 'pitch', 'created', 'id', 'modified', 'owner', 'draft']

fs.readFile(inputFile, encoding='utf8', function(err, data){
	if (err) throw err;
	var input = JSON.parse(data)

	//remove specified keys
	keysToDelete.forEach(function(key) {
		delete input[key]
	})
	
	var styleName = input.name.toLowerCase();
	
	//point sprite and glyphs to mapbox, instead of style author
	input.sprite = "mapbox://sprites/mapbox/"+styleName;
	input.glyphs = "mapbox://fonts/mapbox/{fontstack}/{range}.pbf";

	//remove layer interactivity
	input.layers.forEach(function(layer){
		delete layer.interactive
	})

	//name output file after style title
	fs.writeFileSync(styleName+'.json', JSON.stringify(input, null, 2))
})
