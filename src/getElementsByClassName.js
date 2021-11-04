// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  // get all body children and check for class name
  // for each child get their children and class name
  // repeat for each until no more children
  var results = [];
  var recursiveByClassName = function(element, className) {
    if (element.children.length > 0) {
      for (var i = 0; i < element.children.length; i++) {
        if (element.children[i].classList.contains(className.toString())) {
          results.push(element.children[i]);

        }
        //results.concat(recursiveByClassName(element.children[i], className));
        recursiveByClassName(element.children[i], className);
      }
      return results;
    } else {
      return results;
    }
  };

  var tester = recursiveByClassName(document, className);
  return tester;
  //return recursiveByClassName(document, className);
};
