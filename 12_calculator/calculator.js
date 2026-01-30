const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(array) {
	return array.reduce((sum, num) => sum += num, 0)
};

const multiply = function(array) {
  return array.reduce((mult, num) => mult *= num, 1)
};

const power = function(n1, n2) {
	return Math.pow(n1, n2);
};

const factorial = function(n) {
	if(n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
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
