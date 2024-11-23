const createPhoneNumber = (numbers) => {
    return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`
};

// second variant

const createPhoneNumber2 = (numbers) => {
    let number = "(xxx) xxx-xxxx"
    for (let i = 0; i < numbers.length; i++) {
        number = number.replace('x', numbers[i])
    }
    return number
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

