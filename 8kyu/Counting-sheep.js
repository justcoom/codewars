// Description:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps1(sheep) {
  // TODO
  let result = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      result++;
    }
  }
  return result;
}

function countSheeps2(sheep) {
  // TODO
  let result = 0;
  sheep.forEach((element) => {
    if (element === true) {
      result++;
    }
  });
  return result;
}

function countSheeps3(sheep) {
    return sheep.filter(Boolean).length; 
  }

console.log(countSheeps1([true, undefined, true, false, null]));
console.log(countSheeps2([true, undefined, true, false, null]));
console.log(countSheeps3([true, undefined, true, false, null]));
