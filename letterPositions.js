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

const countLetters = function(sentence) {
  let result = {};
  let charArray = sentence.split("");
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === " ") {
      charArray.splice(i, 1);
    }
  }
  for (let i = 0; i < charArray.length; i++) {
    result[charArray[i]] = 0;
  }
  for (let i = 0; i < charArray.length; i++) {
    result[charArray[i]] += 1;
  }
  return result;
}

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let charArray = sentence.split("");
  let charCounts = countLetters(sentence);
  let keysList = Object.keys(charCounts);
  for (let i = 0; i < keysList.length; i++) {
    let key = keysList[i];
    results[key] = [];
    for (let j = 0; j < charArray.length; j++) {
      if (key === charArray[j]) {
        results[key].push(j);
      }
    }
  }
  return results;
};

module.exports = letterPositions;

console.log(countLetters("lighthouse in the house"));
console.log(letterPositions("lighthouse in the house"));