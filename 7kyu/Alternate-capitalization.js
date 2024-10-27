// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

const capitalize = (s) => {
  odd = s.split("").map((element, index) => index % 2 === 1 ? element.toUpperCase() : element).join("");
  even = s.split("").map((element, index) => index % 2 === 0 ? element.toUpperCase() : element).join("");
  return [even, odd];
};

function capitalize2(s) {
  let oddString = "";
  let evenString = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 1) {
      oddString += s[i].toUpperCase();
      evenString += s[i];
    } else {
      oddString += s[i];
      evenString += s[i].toUpperCase();
    }
  }
  return [evenString, oddString];
}

console.log(capitalize2("abcdef"));
console.log(capitalize("abcdef"));
