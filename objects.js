// prototype for books 
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages " +", " + read 
    }
}

// Array to store books 
let myLibrary = [];

// book ID counter
let id = 0
let book_id

// Table variable 
let table = document.getElementById('book-table');


// Event listener variables
const close_button = document.querySelectorAll('.close_button');
const add_book_button = document.querySelectorAll('.add-book');
const submit_book_button = document.querySelectorAll('.submit-book');

// Event listener for close button on pop-up
submit_book_button.forEach(submit_book_button => {
    submit_book_button.addEventListener('click', addBookToLibrary);
});

// Event listener for close button on pop-up
close_button.forEach(close_button => {
    close_button.addEventListener('click', pop_up_close);
});

// Event listener for add book button
add_book_button.forEach(add_book_button => {
    add_book_button.addEventListener('click', pop_up_open);
});

// when add book button is pressed make pop-up visible 
function pop_up_open() {
    overlay.style.display = 'inline-block';
    popup.style.display = 'inline-block';

}

// when close button is pressed make pop-up invisible
function pop_up_close(){

    overlay.style.display = 'none';
    popup.style.display = 'none';
}


function addBookToLibrary() {
    // get info from the input fields (x)
    // create prototype from input (x)
    // store prototype in myLibrary (x)
    // arrange info from prototype in correct order (x)
    // add info to table in correct order
        // get info for each field 
        // create new row for table 
        // add each field to correct column 
    // clear input fields, have to clear when pressing close button as well
    // make table cells small in the beginning 

    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').value

    book_id = id
    console.log(book_id)
    
    book_id = new Book(title, author, pages, read)
    
    id = id + 1

    myLibrary.push(book_id)

    

    

    ////
    // var row = table.insertRow(1)

    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);

    // // Add some text to the new cells:
    // cell1.innerHTML = "NEW CELL1";
    // cell2.innerHTML = "NEW CELL2";
    ////

}
