const myLibrary = [];
const modal = document.querySelector("dialog");
const addButton = document.querySelector(".addBookButton");
const modalSubmitBtn = document.querySelector(".formSubmitButton");
const modalCloseBtn = document.querySelector(".formCloseButton");
const bookContainer = document.querySelector(".book-container");

function Book(title, author, pages, isBookRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isBookRead = Boolean(isBookRead);
  this.randomNumber = Math.random();
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
  const formTitle = document.querySelector("#title");
  const formAuthor = document.querySelector("#author");
  const formPages = document.querySelector("#pages");
  const formBookRead = document.querySelector("#modalSelect");

  let title = formTitle.value;
  let author = formAuthor.value;
  let pages = formPages.value;
  let isBookRead = formBookRead.value;

  isBookRead = isBookRead === "true" ? true : false;

  const newBook = new Book(title, author, pages, isBookRead);
  myLibrary.push(newBook);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bookTitle = document.createElement("p");
    bookTitle.classList.add("book-title");

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("book-author");

    const bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");

    const bookRead = document.createElement("p");
    bookRead.classList.add("book-read");

    const bookReadBtn = document.createElement("button");
    bookReadBtn.setAttribute("type", "button");
    bookReadBtn.classList.add("button", "read-button");
    bookReadBtn.textContent = "Read?";

    const bookDeleteBtn = document.createElement("button");
    bookDeleteBtn.setAttribute("type", "button");
    bookDeleteBtn.classList.add("button", "delete-button");
    bookDeleteBtn.textContent = "Delete";

    // Add dataset number;
    bookCard.dataset.number = book.randomNumber;

    bookDeleteBtn.addEventListener("click", (event) => {
      event.target.parentElement.remove();
      let numberImLookingFor = event.target.parentElement.dataset.number;
      numberImLookingFor = +numberImLookingFor;
      console.log(event.target.parentElement.dataset.number);
      let indexIwillRemove = myLibrary.findIndex(
        (book) => book.randomNumber === numberImLookingFor,
      );

      myLibrary.splice(indexIwillRemove, 1);
    });

    bookReadBtn.addEventListener("click", (event) => {
      let readStatus = bookRead.textContent;
      readStatus.includes("true") ? console.log("true") : console.log("false");
      let numberImLookingFor = event.target.parentElement.dataset.number;
      console.log(numberImLookingFor);
      numberImLookingFor = +numberImLookingFor;

      let indexIWillUpdate = myLibrary.findIndex(
        (book) => book.randomNumber === numberImLookingFor,
      );

      if (readStatus.includes("true")) {
        myLibrary[indexIWillUpdate].isBookRead = false;
        bookRead.textContent = "Book read?: false";
      } else {
        myLibrary[indexIWillUpdate].isBookRead = true;
        bookRead.textContent = "Book read?: true";
      }
    });

    for (let property in book) {
      if (Object.hasOwn(book, property)) {
        if (property === "title") {
          bookTitle.textContent = book[property];
        }
        if (property === "author") {
          bookAuthor.textContent = book[property];
        }
        if (property === "pages") {
          bookPages.textContent = book[property];
        }
        if (property === "isBookRead") {
          bookRead.textContent = `Book read?: ${book[property]}`;
        }
      }
    }
    bookContainer.appendChild(bookCard);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(bookReadBtn);
    bookCard.appendChild(bookDeleteBtn);
  });
}

function displayBook(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  const bookTitle = document.createElement("p");
  bookTitle.classList.add("book-title");

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("book-author");

  const bookPages = document.createElement("p");
  bookPages.classList.add("book-pages");

  const bookRead = document.createElement("p");
  bookRead.classList.add("book-read");

  const bookReadBtn = document.createElement("button");
  bookReadBtn.setAttribute("type", "button");
  bookReadBtn.classList.add("button", "read-button");
  bookReadBtn.textContent = "Read?";

  const bookDeleteBtn = document.createElement("button");
  bookDeleteBtn.setAttribute("type", "button");
  bookDeleteBtn.classList.add("button", "delete-button");
  bookDeleteBtn.textContent = "Delete";

  // Add dataset number;
  bookCard.dataset.number = book.randomNumber;

  bookDeleteBtn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
    let numberImLookingFor = event.target.parentElement.dataset.number;
    numberImLookingFor = +numberImLookingFor;
    console.log(event.target.parentElement.dataset.number);
    let indexIwillRemove = myLibrary.findIndex(
      (book) => book.randomNumber === numberImLookingFor,
    );

    myLibrary.splice(indexIwillRemove, 1);
  });

  bookReadBtn.addEventListener("click", (event) => {
    let readStatus = bookRead.textContent;
    readStatus.includes("true") ? console.log("true") : console.log("false");
    let numberImLookingFor = event.target.parentElement.dataset.number;
    console.log(numberImLookingFor);
    numberImLookingFor = +numberImLookingFor;

    let indexIWillUpdate = myLibrary.findIndex(
      (book) => book.randomNumber === numberImLookingFor,
    );

    if (readStatus.includes("true")) {
      myLibrary[indexIWillUpdate].isBookRead = false;
      bookRead.textContent = "Book read?: false";
    } else {
      myLibrary[indexIWillUpdate].isBookRead = true;
      bookRead.textContent = "Book read?: true";
    }
  });

  for (let property in book) {
    if (Object.hasOwn(book, property)) {
      if (property === "title") {
        bookTitle.textContent = book[property];
      }
      if (property === "author") {
        bookAuthor.textContent = book[property];
      }
      if (property === "pages") {
        bookPages.textContent = book[property];
      }
      if (property === "isBookRead") {
        bookRead.textContent = `Book read?: ${book[property]}`;
      }
    }
  }
  bookContainer.appendChild(bookCard);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  bookCard.appendChild(bookReadBtn);
  bookCard.appendChild(bookDeleteBtn);
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1, string.length);
}

function clearForm() {
  const formTitle = document.querySelector("#title");
  const formAuthor = document.querySelector("#author");
  const formPages = document.querySelector("#pages");
  const formBookRead = document.querySelector("#modalSelect");

  formTitle.value = "";
  formAuthor.value = "";
  formPages.value = "";
  formBookRead.value = "";
}

addButton.addEventListener("click", () => {
  modal.showModal();
  clearForm();
});

modalSubmitBtn.addEventListener("click", () => {
  addBookToLibrary();
  displayBook(myLibrary[myLibrary.length - 1]);
});

modalCloseBtn.addEventListener("click", () => {
  clearForm();
  modal.close();
});

displayBooks();
