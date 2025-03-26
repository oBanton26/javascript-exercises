const reverseString = function(word) {
    let reversedWord = "";
    let transferString = "";
    for (let i=1; i <= word.length; i++){
        transferString = word.at(-i);
        reversedWord += transferString;
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
