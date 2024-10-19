const library = [];
const modal = document.querySelector("dialog");
const addBookButton = document.querySelector(".addBookButton");
const modalSubmitBtn = document.querySelector(".formSubmitButton");
const modalCloseBtn = document.querySelector(".formCloseButton");
const bookContainer = document.querySelector(".book-container");

function Book(title, author, pages, isBookRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isBookRead = Boolean(isBookRead);
  this.bookId = Math.round(Math.random() * (90000000 - 1000000) - 1);
}

Book.prototype.info = function () {
  return this.isBookRead
    ? `${this.title} by ${this.author}, ${this.pages} pages, book read.`
    : `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
};

function addBookToLibrary() {
  const formTitle = document.querySelector("#title").value.trim();
  const formAuthor = document.querySelector("#author").value.trim();
  const formPages = document.querySelector("#pages").value.trim();
  const formIsBookRead =
    document.querySelector("#modalSelect").value.trim() === "true";

  if (!formTitle || !formAuthor || !formPages) {
    alert("Please fill out all of the fields!");
    return;
  }

  if (isNaN(formPages)) {
    alert("Pages should be a number.");
    return;
  }

  const newBook = new Book(formTitle, formAuthor, formPages, formIsBookRead);
  library.push(newBook);

  displayBook(newBook);
  clearForm();
  modal.close();
}

function displayBook(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  const bookTitle = document.createElement("p");
  bookTitle.classList.add("book-title");
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("book-author");
  bookAuthor.textContent = book.author;

  const bookPages = document.createElement("p");
  bookPages.classList.add("book-pages");
  bookPages.textContent = `${book.pages} pages`;

  const bookRead = document.createElement("p");
  bookRead.classList.add("book-read");
  bookRead.textContent = book.isBookRead
    ? "You have read this book"
    : "You have not read this book";

  const bookReadBtn = document.createElement("button");
  bookReadBtn.setAttribute("type", "button");
  bookReadBtn.classList.add("button", "read-button");
  bookReadBtn.textContent = "Book Status";

  const bookDeleteBtn = document.createElement("button");
  bookDeleteBtn.setAttribute("type", "button");
  bookDeleteBtn.classList.add("button", "delete-button");
  bookDeleteBtn.textContent = "Delete";

  // Add dataset bookId
  bookCard.dataset.bookId = book.bookId;

  // Add event listeners for book actions
  bookContainer.addEventListener("click", function (event) {
    const target = event.target;

    // Check if the clicked element is the 'read-button'
    if (target.classList.contains("read-button")) {
      toggleBookRead(event);
    }

    // Check if the clicked element is the 'delete-button'
    else if (target.classList.contains("delete-button")) {
      deleteBook(event);
    }
  });

  // Append elements to card
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  bookCard.appendChild(bookReadBtn);
  bookCard.appendChild(bookDeleteBtn);

  // Append card to container
  bookContainer.appendChild(bookCard);
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

function deleteBook(event) {
  const bookCard = event.target.parentElement;
  const bookId = +bookCard.dataset.bookId;

  const bookIndex = library.findIndex((book) => book.bookId === bookId);
  if (bookIndex > -1) {
    library.splice(bookIndex, 1); // Remove the book from the library array
    bookCard.remove(); // Remove the card from the DOM
  }
}

function toggleBookRead(event) {
  const bookCard = event.target.parentElement;
  const bookId = +bookCard.dataset.bookId;

  const currentBookIndex = library.findIndex((book) => book.bookId === bookId);
  if (currentBookIndex !== -1) {
    const currentBook = library[currentBookIndex];

    // Toggle the read status of the book
    currentBook.isBookRead = !currentBook.isBookRead;

    // Update the DOM to reflect the change
    const readStatus = bookCard.querySelector(".book-read");
    readStatus.textContent = currentBook.isBookRead
      ? "You have read this book"
      : "You have not read this book";
  }
}

addBookButton.addEventListener("click", () => {
  modal.showModal();
  clearForm();
});

modalSubmitBtn.addEventListener("click", () => {
  addBookToLibrary();
});

modalCloseBtn.addEventListener("click", () => {
  clearForm();
  modal.close();
});
