const removeFromArray = function(array, ...args) {
    args.forEach(arg => {
        let argumentIndex = array.indexOf(arg);
        while (argumentIndex != -1){
            array.splice(argumentIndex, 1);
            argumentIndex = array.indexOf(arg);
        }
    }); 
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
