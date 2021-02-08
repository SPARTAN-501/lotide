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

const tail = function(input) {
  let tailArray = [];
  for (let i = 1; i < input.length; i++) {
    tailArray.push(input[i]);
  }
  return tailArray;
};

module.exports = tail;