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
