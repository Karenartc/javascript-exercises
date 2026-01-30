const palindromes = function (phrase) {
    let cleanPhrase = phrase.replace(/[.,!¡¿\s]+/g, '').toLowerCase();
    let reversed = Array.from(cleanPhrase).reverse().join('');
    return (cleanPhrase === reversed);
};

// Do not edit below this line
module.exports = palindromes;
