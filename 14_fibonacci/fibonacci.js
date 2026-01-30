const fibonacci = function(n) {
    let n1 = 1;
    let n2 = 1;
    let newN = 0;

    if (n == 1 || n == 2){
        return 1;
    } else if (n < 0){
        return 'OOPS';
    }

    for (let i = 2; i < n; i++){
        newN = n1 + n2;

        n1 = n2;
        n2 = newN;
    }

    return newN;
};

// Do not edit below this line
module.exports = fibonacci;
