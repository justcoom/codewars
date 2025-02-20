// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
//
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100
//
// All inputs will be strings, consisting only of characters ( and ).
//     Empty strings are considered balanced (and therefore valid), and will be tested.
//     For languages with mutable strings, the inputs should not be mutated.

function validParentheses(parenStr) {
    // Your code here
    let res = []
    for (const char of parenStr) {
        if (char === '(') {
            res.push(char)
        } else if (char === ')') {
            if (res.length === 0) {
                return false
            }
            res.pop()
        }
    }
    return res.length === 0
}

console.log(validParentheses("(())((()())())"))
console.log(validParentheses(")("))
console.log(validParentheses(")()"))
console.log(validParentheses("(())((()())())"))
