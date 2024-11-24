// Description:
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

const encrypt = (text, n) => {
    if (text === null || text.length === 0 || n <= 0) return text

    for (let i = 0; i < n; i++) {
        let oddStr = "";
        let evenStr = "";

        for (let j = 0; j < text.length; j++) {
            if (j % 2 === 1) {
                oddStr += text[j];
            } else {
                evenStr += text[j];
            }
        }
        text = oddStr + evenStr
    }
    return text;
};

const decrypt = (encryptedText, n) => {
    if (encryptedText === null || encryptedText.length === 0 || n <= 0) return encryptedText

    const halfLength = Math.floor(encryptedText.length / 2);

    for (let i = 0; i < n; i++) {
        const oddStr = encryptedText.slice(0, halfLength);
        const evenStr = encryptedText.slice(halfLength);
        let decryptedText = "";

        for (let j = 0; j < encryptedText.length; j++) {
            if (j < evenStr.length) {
                decryptedText += evenStr[j]
            }
            if (j < oddStr.length) {
                decryptedText += oddStr[j];
            } 
        }

        encryptedText = decryptedText
    }
    return encryptedText
};

console.log(encrypt("This is a test!", 3));
console.log(encrypt("012345", 2));

console.log(decrypt(" Tah itse sits!", 3));
console.log(decrypt("hsi  etTi sats!", 1));
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1));

console.log(encrypt(null, -2));

