const removeFromArray = function(inputArray, ...inputArguments) {
    let modifiedArray = [];
    nextElem: for (const elem of inputArray){
        for (const arg of inputArguments){
            if (elem !== arg){
                continue;
            } else {
                continue nextElem;
            }
        }
        modifiedArray.push(elem);
    }

    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
