// Description:
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

function combine(...manyObjects) {
  // Your code here
    const result = {};
    for (let i = 0; i < manyObjects.length; i++) {
        const obj = manyObjects[i];
        for (const key in obj) {
            if (result[key] !== undefined) {
                result[key] += obj[key]
            } else {
                result[key] = obj[key]
            }
        }
    }
    return result;
}

// function combine(obj1, obj2, obj3) {
//   // Your code here
//     const result = {};
//     for (const key in obj1) {
//         result[key] = obj1[key]
//     }
//     for (const key in obj2) {
//         if (result[key] !== undefined) {
//             result[key] += obj2[key]
//         } else {
//             result[key] = obj2[key]
//         }
//     }
//     for (const key in obj3) {
//         if (result[key] !== undefined) {
//             result[key] += obj3[key]
//         } else {
//             result[key] = obj3[key]
//         }
//     }
//     return result;
// }

console.log(combine(objA, objB, objC, objD))
