const reverseString = function(string) {
    let arrayLetters = string.split('');
    let reverseArray = arrayLetters.reverse();
    let reverseString = reverseArray.join('');
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
