const library = [];
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
    this.bookId = Math.round(Math.random() * (90000000 - 1000000) - 1);
}

Book.prototype.info = function() {
    if (this.isBookRead === true) {
        return `${this.title} by ${this.author}, ${this.pages} pages, book read.`;
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
};

testBooks = [
    (theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)),
    (greenEggsAndHam = new Book("Green Eggs and Ham", "Dr. Seuss", 32, true)),
    (tuesdaysWith = new Book("Tuesdays with Morrie", "Mitch Albom", 144, true)),
    (testBook = new Book("The test book", "Test Author", 400, false)),
];

testBooks.forEach((book) => {
    library.push(book);
});

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
    library.push(newBook);
}

function displayBooks() {
    library.forEach((book) => {
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
        bookCard.dataset.number = book.bookId;

        bookDeleteBtn.addEventListener("click", deleteBook);

        bookReadBtn.addEventListener("click", (event) => {
            let readStatus = bookRead.textContent;
            readStatus.includes("true") ? console.log("true") : console.log("false");
            let numberImLookingFor = event.target.parentElement.dataset.number;
            console.log(numberImLookingFor);
            numberImLookingFor = +numberImLookingFor;

            let indexIWillUpdate = library.findIndex(
                (book) => book.bookId === numberImLookingFor,
            );

            if (readStatus.includes("true")) {
                library[indexIWillUpdate].isBookRead = false;
                bookRead.textContent = "Book read?: false";
            } else {
                library[indexIWillUpdate].isBookRead = true;
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
    bookCard.dataset.number = book.bookId;

    bookDeleteBtn.addEventListener("click");

    bookReadBtn.addEventListener("click", (event) => {
        let readStatus = bookRead.textContent;
        readStatus.includes("true") ? console.log("true") : console.log("false");
        let numberImLookingFor = event.target.parentElement.dataset.number;
        console.log(numberImLookingFor);
        numberImLookingFor = +numberImLookingFor;

        let indexIWillUpdate = library.findIndex(
            (book) => book.bookId === numberImLookingFor,
        );

        if (readStatus.includes("true")) {
            library[indexIWillUpdate].isBookRead = false;
            bookRead.textContent = "Book read?: false";
        } else {
            library[indexIWillUpdate].isBookRead = true;
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

function deleteBook(event) {
    event.target.parentElement.remove();
    let currentBookId = event.target.parentElement.dataset.number;
    currentBookId = +currentBookId;
    console.log(event.target.parentElement.dataset.number);
    let indexIwillRemove = library.findIndex(
        (book) => book.currentBookId === currentBookId,
    );

    library.splice(indexIwillRemove, 1);
}

addButton.addEventListener("click", () => {
    modal.showModal();
    clearForm();
});

modalSubmitBtn.addEventListener("click", () => {
    addBookToLibrary();
    displayBook(library[library.length - 1]);
});

modalCloseBtn.addEventListener("click", () => {
    clearForm();
    modal.close();
});

displayBooks();
