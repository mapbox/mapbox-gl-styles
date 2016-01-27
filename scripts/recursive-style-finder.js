
module.exports.match = match;

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

