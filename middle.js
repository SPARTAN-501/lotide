/*
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/
const assertEqual = require('./assertEqual');

/*
const eqArrays = function(arr1, arr2) {
  let truthy = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      truthy = true;
    }
    else {
      truthy = false;
    }
  }
  return truthy;
}
*/
const eqArrays = require('./eqArrays');

const middle = function(array) {
  let result = [];
  if (array.length > 2) {
    if ((array.length % 2) === 0) {
      let i = array.length / 2;
      result.push(array[i - 1]);
      result.push(array[i]);
    }
    else if ((array.length % 2) !== 0) {
      let i = (array.length / 2) - 0.5;
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = middle;

