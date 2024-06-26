﻿# js-for-react-native

## Student ID: 11020103

## Array String Formatter

## Overview

This JavaScript module provides a convenient way to format an array of strings based on the properties of a corresponding array of numbers.

## Functions

1. **processArray(nums)**

   - Processes each number in the input array.
   - Squares even numbers and cubes odd numbers.
   - Returns a new array with the processed numbers.

2. **formatArrayStrings(strings, array)**
   - Processes the array of numbers using `processArray`.
   - Iterates through each string in the input array.
   - Converts strings to uppercase if the corresponding processed number is even.
   - Converts strings to lowercase if the processed number is odd.
   - Returns the modified array of strings.

## Usage

```javascript
const formatArrayStrings = require("./formatArrayStrings");

const strings = ["apple", "banana", "orange"];
const numbers = [1, 2, 3];

const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings); // Output: ['apple', 'BANANA', 'orange']
```

# User Profile Creator

This code demonstrates the creation of user profiles using JavaScript. It utilizes a function from `arrayManipulation.js` to modify an array of names and then generates user profiles based on the original and modified names.

## Code Overview

1. **Importing Modules**:

   - The `formatArrayStrings` function is imported from the `arrayManipulation.js` file. This function is expected to format an array of strings based on the properties of a corresponding array of numbers.

2. **Creating User Profiles Function**:

   - The `createUserProfiles` function takes two arrays, `names` and `modifiedNames`, as input parameters.
   - It iterates over the `names` array and constructs an array of objects representing user profiles.
   - Each user profile object contains the following properties:
     - `id`: The index of the name plus one.
     - `originalName`: The original name from the `names` array.
     - `modifiedName`: The corresponding modified name from the `modifiedNames` array.

3. **Processing and Generating Profiles**:

   - The original names array (`namesArray`) and a modified names array generated using `formatArrayStrings` are used to create user profiles.

4. **Logging the Result**:
   - The `result` containing an array of user profiles with original and modified names is logged to the console.

## Usage

```javascript
const formatArrayStrings = require("./arrayManipulation.js");

const createUserProfiles = ([...names], [...modifiedNames]) => {
  let obj = [];
  for (index in names) {
    obj.push({
      id: Number(index) + 1,
      originalName: names[index],
      modifiedName: modifiedNames[index],
    });
  }
  return obj;
};

let namesArray = ["michael", "joe", "maggie", "Frank"];
let modifiedNames = formatArrayStrings(namesArray, [1, 2, 3, 4]);
let result = createUserProfiles(namesArray, modifiedNames);

console.log(result);
```
