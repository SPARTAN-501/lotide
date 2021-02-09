# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @luke-501/lotide`

**Require it:**

`const _ = require('@luke-501/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Assert that 2 arrays are equal
* `assertEqual(actual, expected)`: Assert that 2 values are equal
* `assertObjectsEqual(actual, expected)`: Assert that 2 objects are equal
* `countLetters(sentence)`: Count how many times each letter appears in a sentence
* `countOnly(allItems, itemsToCount)`: Counting things in an array
* `eqArrays(arr1, arr2)`: Assert that 2 arrays are equal
* `eqObjects(object1, object2)`: Assert that 2 objects are equal
* `findKey(object, callback)`: Find a key
* `findKeyByValue(obj, value)`: Find key by value
* `head(array)`: Find the head of an array
* `letterPositions(sentence)`: Find where each letter appears in a sentence
* `map(array, callback)`: Put the first letters of each word in an array
* `middle(array)`: Find the middle of an array
* `tail(array)`: Find the tail of an array
* `takeUntil(array, callback)`: Find a segment of an array, up until a condition is met
* `without(source, itemsToRemove)`: Remove some items from an array
