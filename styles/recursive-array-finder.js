
var filterarray1 = ['a','b',['v','z']];
var filterarray2 = ['a','b','v','z'];
var filterarray3 = ['a','b','v'];
var filterarray4 = ['a',['b','v']];


var filterarray5 = ['a',['b','v'], 'x', 'y', ['z']];

var filterarray666 = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[['z']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];

var key = 'z';

function match(filterarray, key) {
  if (filterarray.indexOf(key) != -1) {
    return true;
  }
  else {
    for (var i=0; i<filterarray.length; i++){
      var filtervalue = filterarray[i];
      if (Array.isArray(filtervalue)) {
        // console.log(filtervalue);
        var diditmatch = match(filtervalue, key);
        if (diditmatch === true) {
          return true;
        }
      }
    }
    return false;
  }
}

console.log("should find z in top-level array and return true: " + match(filterarray2, key));
console.log("should not find z in top-level array and return false: " + match(filterarray3, key));
console.log("");
console.log("should find z in nested array and return true: " + match(filterarray1, key));
console.log("should not find z in nested array and return false: " + match(filterarray4, key));

console.log("");
console.log("should find z in second nested array and return true: " + match(filterarray5, key));


console.log("");
console.log("should find z in hell array and return true: " + match(filterarray666, key));


console.log("");
if (match(filterarray1,'v') && match(filterarray1,"b") && match(filterarray1,"a") && match(filterarray1,'v')){
  console.log ("BOOOOOOP");
}
else {
  console.log("didnt find it");
}