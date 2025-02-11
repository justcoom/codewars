const MORSE_CODE = {
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"A",
    "-...":"B",
    "-.-.":"C",
    "-..":"D",
    ".":"E",
    "..-.":"F",
    "--.":"G",
    "....":"H",
    "..":"I",
    ".---":"J",
    "-.-":"K",
    ".-..":"L",
    "--":"M",
    "-.":"N",
    "---":"O",
    ".--.":"P",
    "--.-":"Q",
    ".-.":"R",
    "...":"S",
    "-":"T",
    "..-":"U",
    "...-":"V",
    ".--":"W",
    "-..-":"X",
    "-.--":"Y",
    "--..":"Z",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","
};

decodeMorse = function (morseCode) {
    // Your code here
    // You can use MORSE_CODE[morse]
    return morseCode.trim().split("   ")
        .map(word =>
            word.split(" ").map(char => MORSE_CODE[char]).join(""))
        .join(" ")
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
console.log(decodeMorse('   .... . -.--   '))

