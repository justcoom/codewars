// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// const validatePIN = (pin) => {
// 	//return true or false
//     return (pin.length === 4 || pin.length === 6) && !isNaN(pin) && pin >= 0 && Number.isInteger(+pin)
// };

const validatePIN = (pin) => {
	//return true or false
    if(pin.length !== 4 && pin.length !== 6) {
        return false
    }
	for (const char of pin) {
		if (char < "0" || char > "9") {
			return false;
		}
	}
    return true
};

// regexp for solution: /^(\d{4}|\d{6})$/

console.log(validatePIN("1234"));
console.log(validatePIN("123443"));
console.log(validatePIN("00000000423423"));
console.log(validatePIN("a234"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("1.2342"));
console.log(validatePIN("0000"));
console.log(validatePIN("12.0"));
