const fibonacci = function(numb) {
    let fiboArray = [0, 1];
    for (let i=2; i <= numb; i++){
        fiboArray.push(fiboArray[i-1]+fiboArray[i-2]);
    }

    return fiboArray[numb]
};

// Do not edit below this line
module.exports = fibonacci;
