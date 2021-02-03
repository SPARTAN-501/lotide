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

const middle = function(array) {
  let result = [];
  if (array.length > 2) {
    if ((array.length % 2) === 0) {
      let i = array.length / 2;
      result.push(array[i]);
      result.push(array[i + 1]);
    }
    else if ((array.length % 2) !== 0) {
      let i = (array.length / 2) - 0.5;
      result.push(array[i]);
    }
  }
  return result;
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]