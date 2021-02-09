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

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}  === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

module.exports = assertArraysEqual;

