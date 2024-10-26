// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function findAverage(array) {
  // your code here
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }
  if (res === 0) {
    return 0;
  } else {
    return res / array.length;
  }
}

const find_average2 = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }

  console.log(findAverage([1,1,1]));
  console.log(findAverage([1,2,3]));
  console.log(findAverage([1,2,3,4]));
  console.log(find_average2([1,2,3,4]));
console.log(findAverage([]));
