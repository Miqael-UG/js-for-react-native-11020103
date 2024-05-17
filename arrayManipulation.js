const processArray = ([...nums]) => {
  let newArray = [];
  for (let i = 0; i <= nums.length - 1; i++) {
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

const formatArrayStrings = ([...strings], [...array]) => {
  let processedArray = processArray(array);
  for (let i = 0; i <= strings.length - 1; i++) {
    let string = strings[i];
    let array = processedArray[i];

    if (array % 2 === 0) {
      strings[i] = string.toUpperCase();
    } else {
      strings[i] = string.toLowerCase();
    }
  }
  return strings;
};

let numArray = processArray([1, 2, 3, 4, 5]);
let randomArray = ["mango", "dog", "school", "train"];
console.log(numArray);
console.log(formatArrayStrings(randomArray, numArray));
