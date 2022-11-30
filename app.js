let library = [];

const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", addClicked, false);

function addClicked(event){
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    if(title.value && pages.value && author.value){
        addBook(title.value, pages.value, author.value);
    }
    title.value = "";
    author.value = "";
    pages.value = "";
    event.preventDefault();
}

function Book(name, pages, author) {
    this.name = name;
    this.pages = pages;
    this.author = author;
    //this.element;
}

function addBook(name, pages, author) {
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
        const deleteButton = document.createElement("button");

        deleteButton.setAttribute("onclick", `library.splice(${x},1);updateDisplay(library);`)

        title.textContent = library[x].name;
        author.textContent = "by " + library[x].author;
        pages.textContent = library[x].pages + " pages";
        deleteButton.textContent = "X";

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(deleteButton);

        //library[x].element = x;

        books.appendChild(card);
    }
}