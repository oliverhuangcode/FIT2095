class Book {
	constructor(title, author,year) {
		this.title = title;
		this.author = author;
        this.year=year;
		this.id = Math.round(Math.random() * 1000);
	}
}

module.exports = Book;