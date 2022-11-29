let library = [];

function Book(name, pages, author) {
    this.name = name;
    this.pages = pages;
    this.author = author;
}

function addBook() {
    const name = prompt("Book name:");
    const pages = prompt("Number of pages:");
    const author = prompt("Book author:");
    library.push(new Book(name, pages, author));
    updateDisplay(library);
}

function updateDisplay(library) {
    const books = document.querySelector("#books");
    books.innerHTML = "";
    for(x in library){
        const card = document.createElement("div");
        const title = document.createElement("h2");
        const author = document.createElement("p");
        const pages = document.createElement("p");

        title.textContent = library[x].name;
        author.textContent = "by " + library[x].author;
        pages.textContent = library[x].pages + " pages";

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);

        books.appendChild(card);
    }
}