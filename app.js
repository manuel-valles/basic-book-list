// Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;

  // Clear Fields
  Book.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// BookList Constructor
function BookList(){
    // Add Book To List
    BookList.prototype.addBookToList = function(book){
      const list = document.getElementById('book-list');
      // Create tr element
      const row = document.createElement('tr');
      // Insert columns
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#!" class="delete">X</a></td>
      `;
      // Append the row to the list
      list.appendChild(row);
    }
}

// Event Listener - Submit
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  
  // Instantiate book
  const book = new Book(title, author, isbn);
  // Instantiate BookList
  const bookList = new BookList();

  // Add book to list
  bookList.addBookToList(book);
  // Clear fields
  book.clearFields();

  e.preventDefault();
});