const books = [
    {
        title: "How to be a Millionaire",
        authorName: "Patrick Bet David",
        releaseYear: 2019
    },
    {
        title: "How to make money selling drugs",
        authorName: "Justin Auhwitz",
        releaseYear: 2018
    },
    {
        title: "How to become a FE Dev",
        authorName: "Ronna Weasley",
        releaseYear: 2009
    }
]


const sortByYear = (book1,book2) => {
    if(book1.releaseYear>book2.releaseYear){
        return 1;
    } else if(book1.releaseYear<book2.releaseYear){
        return -1;
    } else {
        return 0;
    }
}

const filteredBooks = books.filter(book => book.releaseYear>2010);
filteredBooks.sort(sortByYear)