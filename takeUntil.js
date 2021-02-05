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

const takeUntil = function(array, callback) {
  // ...
  const results = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(callback(array[i]));
    results.push(array[i]);
    if (callback(array[i]) === true) {
      results.pop();
      return results;
    }
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);