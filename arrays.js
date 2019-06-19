
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
var arrayTwo = [element, ...array]
return arrayTwo
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift(element)
 return array
}

function addElementToEndOfArray(array, element) {
  var arrayTwo = [...array, element]
  return arrayTwo
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

// function accessElementInArray(array, index) {
// var array = [1, 2, 3, 4];
// return array[1]
// }

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

// function removeElementFromBeginningOfArray(array) {
// var arrayTwo = [...array];
//   array.slice();
//   return arrayTwo
// }

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
  return array
}
