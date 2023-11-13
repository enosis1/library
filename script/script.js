console.log("hello world");

const body = document.querySelector("body");
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
myLibrary.push(theHobbit);
let greenEggsAndHam = new Book("Green Eggs and Ham", "Dr. Seuss", 32, true);
myLibrary.push(greenEggsAndHam);
let tuesdaysWith = new Book("Tuesdays with Morrie", "Mitch Albom", 144, true);
myLibrary.push(tuesdaysWith);

function addBookToLibrary() {
  // User Input to add a book to a library

  let title = prompt("Title of the book?");
  let author = prompt("Author?");
  let pages;

  while (isNaN(pages)) {
    pages = prompt("How many pages?");
  }
  // Converts string pages to number
  pages = +pages;

  let bookRead = prompt("Have you read the book?", "Yes/No");
  bookRead.toLowerCase();
  bookRead === "yes" ? true : false;

  const newBook = new Book(title, author, pages, bookRead);
  myLibrary.push(newBook);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    const bookPara = document.createElement("p");
    bookPara.className = "book";

    bookPara.textContent = book.info();
    body.appendChild(bookPara);
  });
}
