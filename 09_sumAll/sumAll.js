const sumAll = function(num1, num2) {
    if((Number.isInteger(num1) && Number.isInteger(num2)) && (num1>0 && num2>0)){
        let minorNumber = (num2>num1) ? num1 : num2;
        let greaterNumber = (num2>num1) ? num2 : num1;
        let sum = 0;

        for(let i = minorNumber; i <= greaterNumber; i++){
            sum += i;
        }

        return sum;
    }else{
        return('ERROR');
    }
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
