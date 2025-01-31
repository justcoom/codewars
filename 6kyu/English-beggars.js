// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].
//
//     Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).
//
//     Note: in case you don't get why this kata is about English beggars, then you are not familiar on how religiously queues are taken in the kingdom ;)
//
// Note 2: do not modify the input array.

function beggars(values, n){
    //your code here
    if (n === 0) return []
    const res = new Array(n).fill(0)
    for (let i = 0; i < values.length; i++) {
        const beggarIndex = i % n
        res[beggarIndex] += values[i]
    }
    return res
}

console.log(beggars([1,2,3,4,5],1))
console.log(beggars([1,2,3,4,5],2))
console.log(beggars([1,2,3,4,5],3))
console.log(beggars([1,2,3,4,5],6))
console.log(beggars([1,2,3,4,5],0))

function beggars2(values, n){
    const outputValues = [];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < values.length; j += n) {
            sum += values[j];
        }
        outputValues.push(sum);
    }
    return outputValues;
}

console.log(beggars2([1,2,3,4,5],3))