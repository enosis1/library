console.log("hello world");

const myLibrary = [];
const modal = document.querySelector("dialog");

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
  let title = formTitle.value;
  let author = formAuthor.value;
  let pages = formPages.value;
  let isBookRead = formCheck.value;

  // Convert pages to a number
  pages = +pages;

  if (isBookRead === "true") {
    isBookRead = true;
  } else {
    isBookRead = false;
  }
  const newBook = new Book(title, author, pages, isBookRead);
  myLibrary.push(newBook);
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1, string.length);
}

function clearForm() {
  formTitle.value = "";
  formAuthor.value = "";
  formPages.value = "";
  formCheck.value = "";
}

displayBooks();
