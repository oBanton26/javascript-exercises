const sumAll = function(intOne, intTwo) {
    if (intOne<0 || intTwo<0 || !Number.isInteger(intOne) || !Number.isInteger(intTwo)){
        return "ERROR";
    }

    let bigInt;
    let smallInt;
    if (intOne > intTwo){
        bigInt = intOne;
        smallInt = intTwo;
    } else {
        bigInt = intTwo;
        smallInt = intOne;
    }

    let sum = 0;
    for (let i=smallInt; i <= bigInt; i++){
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
