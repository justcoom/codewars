// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
//
//     Examples
//     []                   -->  0
//     [1, 2, 3]            -->  3
//     ["x", "y", ["z"]]    -->  4
//     [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.

function deepCount(a){
    let count = 0
    for (let i = 0; i < a.length; i++) {
        count++
        if (typeof a[i] === "object") {
            count += deepCount(a[i])
        }
    }
    return count
}

// console.log(deepCount([1, 2, 3]))
// console.log(deepCount([]))
// console.log(deepCount(["x", "y", ["z"]] ))
// console.log(deepCount([1, 2, [3, 4, [5]]]))
console.log(deepCount( [26,[[15,[[24,[[28,3,[[]]]],[[9,15,22]]]],[[10,[[[[]],[[]],[[]]]],2]]]],[[15,[[1,[[22,22,[[]]]],3]],28]]]))