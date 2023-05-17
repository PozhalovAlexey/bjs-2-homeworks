class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(num) {
    if (num < 0) return (this._state = 0);
     else if (num > 100) return (this._state = 100);
     else return (this._state = num);

  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
    this.author = author;
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book._state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      if (book.name === bookName) {
        this.books.splice(i, 1);
        return book;
      }
    }
    return null;
  }
}

const library = new Library("Библиотека имени Белинского");

const eugeneOnegin = new Book("А.С. Пушкин", "Eugene Onegin", 1833, 268);
const richDad = new Book(
  "Роберт Кийосаки",
  "Богатый папа, бедный папа",
  1997,
  336
);
const cleanCode = new Magazine("Роберт Мартин", "Чистый код", 2008, 464);
const pridePrejudice = new Book(
  "Джейн Остин",
  "Гордость и предубеждение",
  1813,
  432
);
const damagedBook = new Book("Автор", "Название", 1919, 200);
const machineTime = new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138);

library.addBook(new FantasticBook(eugeneOnegin));
library.addBook(new Book(richDad));
library.addBook(new Book(cleanCode));
library.addBook(new NovelBook(pridePrejudice));
library.addBook(machineTime);

const bookFrom1919 = library.findBookBy("releaseDate", 1919);
if (bookFrom1919 === null) {
  library.addBook(new Book(bookFrom1919));
}

const bookToRead = library.giveBookByName("Машина времени");
bookToRead.state = 20;
bookToRead.fix();
library.addBook(bookToRead);
console.log(bookToRead);
const foundBook = library.giveBookByName("Чистый код");
console.log(foundBook);
