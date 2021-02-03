const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}  === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    newArr.push(source[i]);
  }
  // console.log(source);
  // console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArr[i] === itemsToRemove[j]) {
        newArr.splice(i, 1);
      }
    }
  }
  // console.log(source);
  // console.log(newArr);
  return newArr;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"])

const words = ["hello", "world", "lighthouse"];
// console.log(words);
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// console.log(words);
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(words);