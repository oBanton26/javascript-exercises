const palindromes = function (input) {
    const punctuation = /[\.,?!]/g;
    let myString = input.replace(punctuation, "");
    myString = myString.toLowerCase();
    const stringToCompare = myString.split("").reverse().join("");
    if ( stringToCompare === myString){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
