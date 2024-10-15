const convertToCelsius = function(fahrenheit) {
  let convertedCelsius = (fahrenheit-32)* (5/9);
  let celciusRounded = Math.round(convertedCelsius * 10) / 10;
  return celciusRounded;

};

const convertToFahrenheit = function(celsius) {
  let convertedFahrenheit = (celsius*(9/5))+32;
  let fahrenheitRounded = Math.round(convertedFahrenheit * 10) / 10;
  return fahrenheitRounded;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
