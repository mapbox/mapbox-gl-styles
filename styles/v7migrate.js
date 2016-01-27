var fs = require('fs');
var files = process.argv;
var inputFile = process.argv[2];
var outputFile = process.argv[3];
console.log(files);


var inStyle = fs.readFileSync(inputFile, 'utf8');
var inputStyle = JSON.parse(inStyle);
//Tunnels
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

var newTunnelServiceFilter = [
  "in",
  "class",
  "service",
  "driveway",
  "track"
];

var newTunnelServiceFilter = [
  "all",
  [
    "==",
    "structure",
    "tunnel"
  ],
  [
    "in",
    "class",
    "service",
    "driveway",
    "track"
  ]
];

var newTunnelMainFilter = [
  "all",
  [
    "==",
    "structure",
    "tunnel"
  ],
  [
    "in",
    "class",
    "trunk",
    "primary",
    "secondary",
    "tertiary"
  ]
];

var newTunnelMotorwayFilter = [
  "all",
  [
    "==",
    "structure",
    "tunnel"
  ],
  [
    "in",
    "class",
    "motorway"
  ]
];

var newTunnelMotorwayLinkFilter = [
  "all",
  [
    "==",
    "structure",
    "tunnel"
  ],
  [
    "in",
    "class",
    "motorway"
  ]
];

var newTunnelRailFilter = [
  "all",
  [
    "==",
    "structure",
    "tunnel"
  ],
  [
    "in",
    "class",
    "major_rail",
    "minor_rail"
  ]
];

var newTunnelTrunkFilter = [
  "all",
  [
    "==",
    "structure",
    "bridge"
  ],
  [
    "==",
    "type",
    "trunk"
  ]
];


// Bridges
var newBridgeMinorFilter = [
  "all",
  [
    "==",
    "structure",
    "bridge"
  ],
  [
    "in",
    "class",
    "street",
    "street_limited",
    "service",
    "path",
    "pedestrian",
    "track",
    "link"
  ]
];

var newBridgeMotorwayFilter = [
    "track"
];

var newBridgeMajorFilter = [
  "all",
  [
    "==",
    "structure",
    "bridge"
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

var newBridgeServiceFilter = [
  "all",
  [
    "==",
    "structure",
    "bridge"
  ],
  [
    "in",
    "class",
    "service",
    "driveway",
    "track"
  ]
];

var newBridgeMainFilter = [
  "all",
  [
    "==",
    "structure",
    "bridge"
  ],
  [
    "in",
    "class",
    "trunk",
    "primary",
    "secondary",
    "tertiary"
  ]
];

var newBridgeMotorwayFilter = [
  "all",
  [
    "==",
    "structure",
    "bridge"
  ],
  [
    "in",
    "class",
    "motorway"
  ]
];

var newBridgeMotorwayLinkFilter = [
  "all",
  [
    "==",
    "structure",
    "bridge"
  ],
  [
    "in",
    "class",
    "motorway_link"
  ]
];

var newBridgeRailFilter = [
  "all",
  [
    "==",
    "structure",
    "bridge"
  ],
  [
    "in",
    "class",
    "major_rail",
    "minor_rail"
  ]
];

var newBridgeTrunkFilter = [
  "all",
  [
    "==",
    "structure",
    "bridge"
  ],
  [
    "==",
    "type",
    "trunk"
  ]
];



var newMainRoadFilter= [
    "in",
    "class",
    "primary",
    "secondary",
    "tertiary"
];

var newRoadTrunkFilter = [
    "==",
    "type",
    "trunk"
];

var newRoadOneWayFilter = [
                "all",
                [
                    "==",
                    "oneway",
                    1
                ],
                [
                "in",
                "class",
                "primary",
                "secondary",
                "tertiary",
                "street",
                "street_limited"
                ],
                [
                    "!=",
                    "type",
                    "trunk"
                ]
            ];

// inputStyle.sources.["mapbox://mapbox.mapbox-streets-v6"].url = "mapbox://mapbox.mapbox-streets-v7";
var layers = inputStyle.layers;


function searchNested(filterarray, key) {
  if (filterarray.indexOf(key) != -1) {
    return true;
  }
  else {
    for (var i=0; i<filterarray.length; i++){
      var filtervalue = filterarray[i];
      if (Array.isArray(filtervalue)) {
        // console.log(filtervalue);
        var diditmatch = searchNested(filtervalue, key);
        if (diditmatch === true) {
          return true;
        }
      }
    }
    return false;
  }
}

var existingRoadMain = [
                "all",
                [
                    "==",
                    "class",
                    "main"
                ],
                [
                    "!=",
                    "type",
                    "trunk"
                ]
            ];


var existingRoadTrunk = [
                "all",
                [
                    "==",
                    "class",
                    "main"
                ],
                [
                    "==",
                    "type",
                    "trunk"
                ]
            ];

layers.forEach (function(layer){
	// console.log(layer.id);
  var filterarray = layer.filter;
  // console.log(filterarray);

    //roads

    if ((layer["source-layer"]==="road" && searchNested(filterarray, "!=")) && searchNested(filterarray,"main")){
      layer.filter = newMainRoadFilter;
    }

    if (layer["source-layer"]==="road" && layer["id"].indexOf("trunk")>-1 && !(searchNested(filterarray,"oneway")) ){
      // console.log(layer["id"].indexOf("trunk")>-1, layer["id"]);
      layer.filter = newRoadTrunkFilter;
    }

    if (layer["source-layer"]==="road" && searchNested(filterarray, "!=") && searchNested(filterarray,"main") && searchNested(filterarray,"oneway")){
      // console.log(layer["id"].indexOf("trunk")>-1, layer["id"]);
      layer.filter = newRoadOneWayFilter;
    }


    //tunnels
    if (layer["source-layer"]==="tunnel" && searchNested(filterarray, "street") && searchNested(filterarray,"==")){
      layer.filter = newTunnelMinorFilter;
      layer["source-layer"] = "road";

    }
    if (layer["source-layer"]==="tunnel" && searchNested(filterarray, "street_limited") && searchNested(filterarray,"==")){
      layer.filter = newTunnelMinorFilter;
      layer["source-layer"] = "road";

    }
    if (layer["source-layer"]==="tunnel" && searchNested(filterarray, "driveway") && searchNested(filterarray,"service") && searchNested(filterarray,"in")){
      layer.filter = newTunnelServiceFilter;
      layer["source-layer"] = "road";

    }
    if (layer["source-layer"]==="tunnel" && searchNested(filterarray, "main") && searchNested(filterarray,"==")&& searchNested("!=")){

      layer.filter = newTunnelMainFilter;
      layer["source-layer"] = "road";

    }
    if (layer["source-layer"]==="tunnel" && searchNested(filterarray, "motorway") && searchNested(filterarray,"==")){
      layer.filter = newTunnelMotorwayFilter;
      layer["source-layer"] = "road";

    }
    if (layer["source-layer"]==="tunnel" && searchNested(filterarray, "motorway_link") && searchNested(filterarray,"==")){
      layer.filter = newTunnelMotorwayLinkFilter;
      layer["source-layer"] = "road";

    }
    if (layer["source-layer"]==="tunnel" && searchNested(filterarray, "motorway_link") && searchNested(filterarray,"==")){
      layer.filter = newTunnelMotorwayLinkFilter;
      layer["source-layer"] = "road";
    }

    if (layer["source-layer"]==="tunnel" && searchNested(filterarray, "trunk") && searchNested(filterarray,"==")){
      layer.filter = newTunnelTrunkFilter;
      layer["source-layer"] = "road";
    }


    //bridge

    if (layer["source-layer"]==="bridge" && searchNested(filterarray, "street") && searchNested(filterarray,"==")){
      layer.filter = newBridgeMinorFilter;
      layer["source-layer"] = "road";

    }
    if (layer["source-layer"]==="bridge" && searchNested(filterarray, "street_limited") && searchNested(filterarray,"==")){
      layer.filter = newBridgeMinorFilter;
      layer["source-layer"] = "road";

    }
    if (layer["source-layer"]==="bridge" && searchNested(filterarray, "driveway") && searchNested(filterarray,"service") && searchNested(filterarray,"in")){
      layer.filter = newBridgeServiceFilter;
      layer["source-layer"] = "road";

    }
    if (layer["source-layer"]==="bridge" && searchNested(filterarray,"main") && searchNested(filterarray,"==") && searchNested("!=")){
      layer.filter = newBridgeMainFilter;
      layer["source-layer"] = "road";

    }
    if (layer["source-layer"]==="bridge" && searchNested(filterarray, "motorway") && searchNested(filterarray,"==")){
      layer.filter = newBridgeMotorwayFilter;
      layer["source-layer"] = "road";

    }
    if (layer["source-layer"]==="bridge" && searchNested(filterarray, "motorway_link") && searchNested(filterarray,"==")){
      layer.filter = newBridgeMotorwayLinkFilter;
      layer["source-layer"] = "road";

    }
    if (layer["source-layer"]==="bridge" && searchNested(filterarray, "motorway_link") && searchNested(filterarray,"==")){
      layer.filter = newBridgeMotorwayLinkFilter;
      layer["source-layer"] = "road";
    }
    if (layer["source-layer"]==="bridge" && searchNested(filterarray, "major_rail") && searchNested(filterarray,"==")){
      layer.filter = newBridgeRailFilter;
      layer["source-layer"] = "road";
    }
    if (layer["source-layer"]==="bridge" && searchNested(filterarray, "trunk") && searchNested(filterarray,"==")){
      layer.filter = newBridgeTrunkFilter;
      layer["source-layer"] = "road";
    }

});



var outputStyle = JSON.stringify(inputStyle, null, 2);
fs.writeFileSync(outputFile, outputStyle,'utf8');

// console.log(inputStyle.sources.mapbox.url);


