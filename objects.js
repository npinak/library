// prototype for books 
function Book(title, author, pages, read, id) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = id
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages " +", " + read 
    }
}

// Array to store books 
let myLibrary = [];

// book ID counter
let id = 0
let book_id


// Event listener variables
const close_button = document.querySelectorAll('.close_button');
const add_book_button = document.querySelectorAll('.add-book');
const submit_book_button = document.querySelectorAll('.submit-book');
const read_status = document.querySelectorAll('.read-status');
const delete_div = document.querySelectorAll('.delete');

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

// Event listener for read-status
read_status.forEach(read_status => {
    read_status.addEventListener('click', change_read_status);
});


// delete row from table 
var index, book_table = document.getElementById('book-table'); 
for(var i = 0; i < book_table.rows.length; i++){
    book_table.rows[i].cells[4].onclick = function()
    {
        index = this.parentElement.rowIndex;
        book_table.deleteRow(index);
        console.log(index);
    }
}


// change read status when div is clicked
function change_read_status() {
    let status = this.innerHTML
    if (status == 'not read'){
        status = 'read'
    } else if (status == 'read'){
        status = 'not read'
    }
    this.innerHTML = status
}

// when add book button is pressed make pop-up visible 
function pop_up_open() {
    overlay.style.display = 'inline-block';
    popup.style.display = 'inline-block';
}

// when close button is pressed make pop-up invisible
function pop_up_close(){
    overlay.style.display = 'none';
    popup.style.display = 'none';
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
}


function addBookToLibrary() {
    // get info from the input fields (x)
    // create prototype from input (x)
    // store prototype in myLibrary (x)
    // arrange info from prototype in correct order (x)
    // add info to table in correct order
        // get info for each field (x)
        // create new row for table (x)
        // add each field to correct column (x)
    // clear input fields, have to clear when pressing close button as well (x)
    // make read cell togglable (x)
    // make table cells small in the beginning (x)
    // make a delete button(x)
    // style pop-up (x)

    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value
    
    
    book_id = new Book(title, author, pages, read, id)
    
    id = id + 1

    myLibrary.push(book_id)

    // Populate table with books

    console.log(myLibrary)

    const table = document.getElementById("book-table");
    const row = table.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    cell4.classList.add("read-status") // add class to read-status to change read status on click
    cell5.classList.add("delete") // add class to read-status to change read status on click
    cell1.innerHTML = title;
    cell2.innerHTML = author;
    cell3.innerHTML = pages;
    cell4.innerHTML = read;
    cell5.innerHTML = "Delete"

    // delete row function 
    var index, book_table = document.getElementById('book-table');
    for (var i = 0; i < book_table.rows.length; i++) {
        book_table.rows[i].cells[4].onclick = function () {
            index = this.parentElement.rowIndex;
            book_table.deleteRow(index);
            console.log(index);
        }
    }

    // Clear input fields 

    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    // document.getElementById('read').value = ''


    // To change read status functionality 
    const read_status = document.querySelectorAll('.read-status');    
    // Event listener for read-status
    read_status.forEach(read_status => {
        read_status.addEventListener('click', change_read_status);
    });


}
