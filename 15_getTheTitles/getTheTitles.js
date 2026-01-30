const getTheTitles = function(array) {
    let books = [];
    array.forEach(book => {
        books.push(book.title);
    });
    return books;
};

// Do not edit below this line
module.exports = getTheTitles;
