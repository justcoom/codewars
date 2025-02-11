// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]

// function towerBuilder(nFloors) {
//     // build here
//     const resArr = []
//     for (let i = 1; i <= nFloors; i++) {
//         const stars = "*".repeat(2 * i - 1)
//         const spaces = " ".repeat((2 * nFloors - 1 - stars.length) / 2)
//         resArr.push(spaces + stars + spaces)
//     }
//     return resArr
// }

function towerBuilder(nFloors) {
    // build here
    const resArr = []
    for (let i = 0; i < nFloors; i++) {
        const spaces = " ".repeat(nFloors - i - 1)
        resArr.push(spaces + "*".repeat(2 * i + 1) + spaces)
    }
    return resArr
}

console.log(towerBuilder(3))