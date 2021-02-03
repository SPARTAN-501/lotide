const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let count = {};
  let keysToCount = Object.keys(itemsToCount);
  // console.log(keysToCount);
  for (let i = 0; i < keysToCount.length; i++) {
    let key = keysToCount[i];
    count[key] = 0;
    for (let j = 0; j < allItems.length; j++) {
      if (itemsToCount[key] === true) {
        if (allItems[j] === keysToCount[i]) {
          count[key] += 1;
        }
      }
    }
  }
  let newKeys = Object.keys(count);
  for (let i = 0; i < newKeys.length; i++) {
    if (count[newKeys[i]] === 0) {
      count[newKeys[i]] = undefined;
    }
  }
  return count;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);