// Description:
// Multiply the adjacent digits which are not separated by a '-' or a '+' in a string, then do the sum.

// For example:

// "53+5"    ->   20, which is 5 * 3 + 5
// "266-66"  ->   36, which is 2 * 6 * 6 - 6 * 6
// "555"     ->  125, which is 5 * 5 * 5a

function digitMultiplication(expr) {
  let total = 0;
  let currentProduct = 1;
  let multiplying = true;
  for (let i = 0; i < expr.length; i++) {
    if (!isNaN(expr[i])) {
      currentProduct *= expr[i];
    } else {
      if (multiplying) {
        total += currentProduct;
      } else {
        total -= currentProduct;
      }

      currentProduct = 1;

      if (expr[i] === '+') {
        multiplying = true
      } else if (expr[i] === '-'){
        multiplying = false
      }
    }
  }

  multiplying ? total += currentProduct : total -= currentProduct
  return total;
}

// function calculateExpression(expression) {
//   // Initialize variables
//   let total = 0;
//   let currentProduct = 1;
//   let multiplying = true;

//   // Loop through each character in the expression
//   for (let i = 0; i < expression.length; i++) {
//     const char = expression[i];

//     if (/\d/.test(char)) {
//       // Check if the character is a digit
//       currentProduct *= parseInt(char, 10);
//     } else {
//       // If we hit a '+' or '-', finalize the current product
//       if (multiplying) {
//         total += currentProduct;
//       } else {
//         total -= currentProduct;
//       }

//       // Reset for the next segment
//       currentProduct = 1;

//       // Check if the character is '+' or '-'
//       if (char === "-") {
//         multiplying = false;
//       } else if (char === "+") {
//         multiplying = true;
//       }
//     }
//   }

//   // Add the last product if there is one
//   if (multiplying) {
//     total += currentProduct;
//   } else {
//     total -= currentProduct;
//   }

//   return total;
// }

console.log(digitMultiplication("53+5"));
  console.log(digitMultiplication("266-66"));
  console.log(digitMultiplication("555"));
