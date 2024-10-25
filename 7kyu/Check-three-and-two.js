// Description:
// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"a

function checkThreeAndTwo(array) {
    //your code here
    const resultObj = {}
    for (const char of array) {
      resultObj[char] = (resultObj[char] || 0) + 1
    }
    return Object.values(resultObj).includes(2) && Object.values(resultObj).includes(3)
  }

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]));
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]));
