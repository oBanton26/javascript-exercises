const repeatString = function(string, numb) {
    let finalString = "";
    if (numb<0){return "ERROR"};
    for (let i=1; i <= numb; i++) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
