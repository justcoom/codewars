// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution1(str) {
    return str.split("").reverse().join("")
}

function solution2(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[str.length - 1 - i]
    }
    return result;
}

console.log(solution1("world"));
console.log(solution2("world"));
// console.log(solution("hello"));
// console.log(solution(""));
// console.log(solution("h"));

