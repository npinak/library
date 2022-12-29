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
    // get info from the input pop-up
    // create prototype from input
    // store prototype in myLibrary
    // arrange info from prototype in correct order
    // add info to correct cell

    var table = document.getElementById("book-table");
    
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";

    
}

// algorithm
// Click button and a pop-up input appears
// After clicking submit a new line is created in the table with info about book
