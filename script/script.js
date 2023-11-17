console.log("hello world");

const body = document.querySelector("body");
const bookContainer = document.querySelector(".book-container");
const modal = document.querySelector("dialog");
const addButton = document.querySelector(".addBookButton");
const modalSubmitButton = document.querySelector(".formSubmitButton");
const modalCloseButton = document.querySelector(".modalCloseButton");
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formCheck = document.querySelector("#isBookRead");
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

  let title = formTitle.value;
  let author = formAuthor.value;
  let pages = formPages.value;
  let isBookRead = formCheck.value;

  pages = +pages;
  if (isBookRead === "true") {
    isBookRead = true;
  } else {
    isBookRead = false;
  }
  const newBook = new Book(title, author, pages, isBookRead);
  myLibrary.push(newBook);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    let dataValue = Math.random();
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    const bookButtons = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    deleteButton.addEventListener("click", (event) => {
      let index = event.target.parentElement.parentElement.dataset.index;
      index = +index;
      console.log(index);
      event.target.parentElement.parentElement.remove();

      for (let position in myLibrary) {
        if (myLibrary[position].index === index) {
          myLibrary.splice(position, 1);
        }
      }
    });

    for (let property in book) {
      if (Object.hasOwn(book, property)) {
        const bookInformation = document.createElement("div");
        const bookLabel = document.createElement("p");
        const bookInfo = document.createElement("p");
        bookInformation.classList.add("book-information");
        editButton.classList.add("button");
        editButton.classList.add("edit-button");
        deleteButton.classList.add("button");
        deleteButton.classList.add("delete-button");
        bookButtons.classList.add("book-buttons");

        bookLabel.classList.add("book-label");
        if (property === "isBookRead") {
          bookLabel.textContent = `Book Read?:`;
        } else {
          bookLabel.textContent = `${capitalize(property)}:`;
        }

        bookInfo.classList.add("book-info");
        bookInfo.textContent = `${book[property]}`;

        editButton.textContent = "Edit";
        deleteButton.textContent = "Delete";

        bookInformation.appendChild(bookLabel);
        bookInformation.appendChild(bookInfo);
        bookCard.appendChild(bookInformation);
        bookButtons.appendChild(editButton);
        bookButtons.appendChild(deleteButton);
        bookCard.appendChild(bookButtons);
        bookCard.dataset.index = dataValue;
        book.index = dataValue;
      }
    }

    bookContainer.appendChild(bookCard);
  });
}

function displayBook(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  const bookButtons = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  deleteButton.addEventListener("click", (event) => {
    let index = event.target.parentElement.parentElement.dataset.index;
    index = +index;
    console.log(index);
    event.target.parentElement.parentElement.remove();

    for (let position in myLibrary) {
      if (myLibrary[position].index === index) {
        myLibrary.splice(position, 1);
      }
    }
  });

  for (let property in book) {
    if (Object.hasOwn(book, property)) {
      let dataValue = Math.random();
      const bookInformation = document.createElement("div");
      const bookLabel = document.createElement("p");
      const bookInfo = document.createElement("p");

      bookInformation.classList.add("book-information");
      editButton.classList.add("button");
      deleteButton.classList.add("button");
      bookButtons.classList.add("book-buttons");

      bookLabel.classList.add("book-label");
      if (property === "isBookRead") {
        bookLabel.textContent = `Book Read?:`;
      } else {
        bookLabel.textContent = `${capitalize(property)}:`;
      }

      bookInfo.classList.add("book-info");
      bookInfo.textContent = `${book[property]}`;

      editButton.textContent = "Edit";
      deleteButton.textContent = "Delete";

      bookInformation.appendChild(bookLabel);
      bookInformation.appendChild(bookInfo);
      bookCard.appendChild(bookInformation);
      bookButtons.appendChild(editButton);
      bookButtons.appendChild(deleteButton);
      bookCard.appendChild(bookButtons);
      bookCard.dataset.index = dataValue;
      book.index = dataValue;
    }
  }

  bookContainer.appendChild(bookCard);
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

addButton.addEventListener("click", () => {
  clearForm();
  modal.showModal();
});

modalCloseButton.addEventListener("click", () => {
  modal.close();
});

modalSubmitButton.addEventListener("click", () => {
  addBookToLibrary();
  displayBook(myLibrary[myLibrary.length - 1]);
});

const bookCards = document.querySelectorAll(".book-card");
let bookCardsArray = Array.from(bookCards);

// btn.addEventListener("click", (event) => {
//   let index = event.target.parentElement.parentElement.dataset.index;
//   index = +index;
//   console.log(index);
//   event.target.parentElement.parentElement.remove();

//   for (let position in myLibrary) {
//     if (myLibrary[position].index === index) {
//       myLibrary.splice(position, 1);
//     }
//   }
// });
