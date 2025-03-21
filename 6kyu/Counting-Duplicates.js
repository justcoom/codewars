// Description:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    //...
    const lowerText = text.toLowerCase()
    return lowerText.toLowerCase().split("").reduce((acc, el) => {
        const firstIndex = lowerText.indexOf((el))
        if(lowerText.indexOf(el, firstIndex + 1) !== -1) {
            if (!acc.includes(el)) {
                acc.push(el)
            }
        }
        return acc
    }, []).length
}

// function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
//   }

//console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
//console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("aA11"));
console.log("aA11".toLowerCase());
console.log(duplicateCount("ABBA"));



