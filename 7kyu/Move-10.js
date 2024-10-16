
// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.


function moveTen(s){
    let newString = '';
    for (let i = 0; i < s.length; i++) {
        newString += String.fromCharCode((s.charCodeAt(i) - 97 + 10) % 26 + 97) 
    }
    return newString
}

// ПЫТАЛСЯ РЕШИТЬ ЧЕРЕЗ ПРЕОБРАЗОВАНИЕ СТРОКИ В МАССИВ АХВХАВХАХВ

// function moveTen2(s){
//     s.split("").map((char) => {
//         char = s.charCodeAt(i)
//         char += 10;
//         String.fromCharCode(char)
//         return String.fromCharCode(char)
//     })
    
//     return 
// }

// function moveTen3(s){
//     let newStr = s.split("")
//     console.log(newStr);
    
//     for (let i = 0; i < newStr.length; i++) {
//         let char = newStr.charCodeAt[i]
//         char += 10;
//         char = String.fromCharCode(char)
//         newStr.push(char)
//     }
//     return newStr.join("")
// }

console.log(moveTen("testcase"));
console.log(moveTen("codewars"));
console.log(moveTen("exampletesthere"));
