// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//     12 --> "10 + 2"
// 45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    // Your code here
    const numStr = num.toString();
    const result = [];
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] !== "0") {
            const value = numStr[i] * (Math.pow(10, numStr.length - 1 - i))
            result.push(value.toString())
        }
    }
    return result.join(" + ")
}

const expandedForm2 = n => n.toString()
    .split("")
    .reverse()
    .map( (a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");

console.log(expandedForm(12))
console.log(expandedForm(425))
console.log(expandedForm(70304))


console.log(expandedForm2(12))
