// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const towels = {a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'}
    return str.split("").reduce((acc, el)=> {
        return el === towels[el] ? acc += 1 : acc
    }, 0)
}

function getCount2(str) {
    return (str.match(/[aeiou]/ig)||[]).length
}

console.log(getCount2("abracadabra")) // 5