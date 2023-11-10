console.log("hello world");

const myLibrary = [];

function Book(title, author, pages, isBookRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isBookRead = Boolean(isBookRead);
}

Book.prototype.info = function () {
  if (this.isBookRead === true) {
    return `${this.title} by ${this.author}, ${this.pages} pages, book read.`;
  }
  return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
};

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

function addBookToLibrary() {}
