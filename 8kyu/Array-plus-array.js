// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    const sum1 = arr1.reduce(function (num1, num2) {
        return num1 + num2;
    })
    const sum2 = arr2.reduce(function (num1, num2) {
        return num1 + num2;
    })
    return sum1 + sum2; //something went wrong
}

console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
