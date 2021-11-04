// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // get of obj, iterate over key values, if value is object, recurssive with value
  var recursiveStringify = function(obj) {
    var stringed = '';
    console.log('typeof obj: ' + typeof obj);
    if (typeof obj === 'string') {
      console.log('typeof is string');
      return '"' + obj + '"';
    } else if ((typeof obj !== 'object') || obj === null) {
      return '' + obj + '';
    } else if (Array.isArray(obj)) {
      stringed += '[';
      console.log(obj + ' is array');
      console.log('obj.length: ' + obj.length);
      for (var i = 0; i < obj.length; i++) {
        //console.log('typeof obj[Object.keys(obj)[i]]: ' + typeof obj[Object.keys(obj)[i]]);
        stringed += recursiveStringify(obj[i]);
        if (i !== obj.length - 1) {
          stringed += ',';
        }
        console.log('stringed: ' + stringed);
      }
      stringed += ']';
      return stringed;
      //return '[' + obj + ']';
    } else {
      stringed += '{';
      console.log('object keys: ' + Object.keys(obj));
      for (var i = 0; i < (Object.keys(obj)).length; i++) {
        //console.log('typeof obj[Object.keys(obj)[i]]: ' + typeof obj[Object.keys(obj)[i]]);
        if (typeof obj[Object.keys(obj)[i]] !== 'function' &&
          typeof obj[Object.keys(obj)[i]] !== 'undefined') {
          stringed += recursiveStringify(Object.keys(obj)[i]) + ':' +
            recursiveStringify(obj[Object.keys(obj)[i]]);
          if (i !== Object.keys(obj).length - 1) {
            stringed += ',';
          }
        }
      }
      stringed += '}';
      console.log('stringed' + stringed);
      return stringed;
    }
  };

  return recursiveStringify(obj);
};
