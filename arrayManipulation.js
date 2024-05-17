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
  console.log(newArray);
};

processArray([1, 2, 3, 4, 5]);
