const convertToCelsius = function(degreeF) {
  let convertedTemp = (degreeF-32)*(5/9);
  let roundedConvertedTemp = Math.round(convertedTemp*10)/10;
  return roundedConvertedTemp;
};

const convertToFahrenheit = function(degreeC) {
  let convertedTemp = degreeC*(9/5)+32;
  let roundedConvertedTemp = Math.round(convertedTemp*10)/10;
  return roundedConvertedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
