const processArray = (nums) => {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let square = Math.pow(nums[i], 2);
      newArray.push(square);
    } else {
      let triple = Math.pow(nums[i], 3);
      newArray.push(triple);
    }
  }
  return newArray;
};

const formatArrayStrings = (strings, array) => {
  let processedArray = processArray(array);
  for (let i = 0; i < strings.length; i++) {
    let string = strings[i];
    let processedNumber = processedArray[i];

    if (processedNumber % 2 === 0) {
      strings[i] = string.toUpperCase();
    } else {
      strings[i] = string.toLowerCase();
    }
  }
  return strings;
};

module.exports = formatArrayStrings;
