// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

const solution = (number) => {
	let sum = 0;
	for (let i = 0; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
};

const func1 = (number) => {
    return number < 1 ? 0 : [...new Array(number).keys()].filter((num) => num % 3 === 0 || num % 5 === 0).reduce((acc, num) => acc + num)
}


console.log(func1(10));
console.log(func1(-13));
console.log(func1(16));
