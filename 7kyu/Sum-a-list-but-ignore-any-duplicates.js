// Description:
// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

const sumNoDuplicates = (numList) => {
	return numList.reduce((acc, num) => {
        if(numList.indexOf(num) === numList.lastIndexOf(num)) {
            acc += num
        }
        return acc
    }, 0)
};

// const sumNoDuplicates = (numList) => {
// 	const unique = {};
//     numList.forEach(num => {
//         if (unique[num]) {
//             unique[num] += 1
//         } else {
//             unique[num] = 1
//         }
//     });
    
//     return numList.reduce((acc, num) => {
//         if(unique[num] === 1) {
//             acc += num
//         }
//         return acc
//     }, 0)
// };


console.log(sumNoDuplicates([1, 1, 2, 3]));
console.log(sumNoDuplicates([3, 4, 3, 6]));
console.log(sumNoDuplicates([]));
console.log(sumNoDuplicates([1, 1, 2, 2, 3]));
console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]));

