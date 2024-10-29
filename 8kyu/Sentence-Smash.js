// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// words = ['hello', 'world', 'this', 'is', 'great']
// smash(words) # returns "hello world this is great"
// Assumptions
// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you do get an array.

function smash (words) {
    return words.join(' ')
 };


function smash2 (words) {
    let res = ''
    for (const word of words) {
        res += word + ' '
    }
    return res
 };


 console.log(smash(["hello", "world"]));
 console.log(smash(["hello", "amazing", "world"]));
 console.log(smash([]));
 console.log(smash(["hello"]));

 console.log(smash2(["hello", "world"]));
 console.log(smash2(["hello", "amazing", "world"]));
 console.log(smash2([]));
 console.log(smash2(["hello"]));
 
 