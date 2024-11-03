// Description:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.


const getSum = (a, b) => {
    let sum = 0;
    if (a === b) {
        sum = a
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i    
        }
    } else {
        for (let i = b; i <= a; i++) {
            sum += i
        }
    }
    return sum
}

// function getSum2(a, b) {
//     // Если числа равны, возвращаем одно из них
//     if (a === b) {
//         return a;
//     }
//     // Определяем минимальное и максимальное значения
//     const min = Math.min(a, b);
//     const max = Math.max(a, b);
//     // Используем формулу для суммы арифметической последовательности
//     return (max - min + 1) * (min + max) / 2;
// }

console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
console.log(getSum(1, 0));
console.log(getSum(1, 5));

// console.log(getSum2(0, -1));
// console.log(getSum2(0, 1));
// console.log(getSum2(2, 2));
// console.log(getSum2(1, 0));
// console.log(getSum2(1, 5));