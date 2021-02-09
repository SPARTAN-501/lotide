const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

module.exports = countLetters;

console.log(countLetters("lighthouse in the house"));