// Description:
//     Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = (arr) => {
    const result = arr.reduce((acc, el) => {
        if (el === 0) {
            acc[1].push(el)
        } else {
            acc[0].push(el);
        }
        return acc;
    }, [[], []])
    return [...result[0], ...result[1]]
}

const moveZeros2 = (arr) => {
    const arr1 = arr.filter(el => el === 0)
    const arr2 = arr.filter(el => el !== 0)
    return [...arr2, ...arr1]
}



console.log(moveZeros2([false, 1, 0, 1, 2, 0, 1, 3, "a"]))
console.log(moveZeros2([1,2,0,1,0,1,0,3,0,1]))