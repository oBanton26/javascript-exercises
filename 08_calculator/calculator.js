const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, item) => acc*item, 1);
};

const power = function(numb, power) {
	return numb ** power;
};

const factorial = function(numb) {
	if (numb == 0){return 1}
  else {
    let result = 1;
    for (let i=1; i <= numb; i++){
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
