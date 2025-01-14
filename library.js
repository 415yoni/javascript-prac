const myLibrary = [];

function Book(title, author, pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
  
    this.info = function(){
      let readStatus;
      if(this.read === "read"){
        readStatus = "read"
    }
    else{
      readStatus = "not read yet";
    }
    return `${this.title} by ${this.author}, is ${this.pages} pages, ${readStatus}`;
       
      
  
    }
  }

function addBookToLibrary(book) {
    myLibrary.push(book)
  // do stuff here
}

function displayBooks() {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = '';
    myLibrary.forEach((book, index) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
  
      bookCard.innerHTML = `
        <p><strong>Title:</strong> ${book.title}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
        <button class="toggle-read-btn" data-index="${index}">Toggle Read</button>
      `;
  
      libraryContainer.appendChild(bookCard);
    });
  
    // Add event listeners for buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        myLibrary.splice(index, 1);
        displayBooks();
      });
    });
  
    document.querySelectorAll('.toggle-read-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        myLibrary[index].read = !myLibrary[index].read;
        displayBooks();
      });
    });
  }
  

addBookToLibrary(new Book("To Kill a Mockingbird", "Harper Lee", 281, true));
addBookToLibrary(new Book("1984", "George Orwell", 328, false));



