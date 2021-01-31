// DOM Selection

const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const addBook = document.getElementById("addBook");
const bookList = document.getElementById("book-list");

// click handler
addBook.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value == "") {
    alert("Please enter book title");
  } else if (author.value == "") {
    alert("Please enter author name");
  } else if (year.value == "") {
    alert("Please enter year");
  } else {
    const newRow = document.createElement("tr");
    bookList.appendChild(newRow);

    // creating new title
    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // creating new author
    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    // creating new year
    const newYear = document.createElement("th");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    // value resetting
    title.value = "";
    author.value = "";
    year.value = "";
  }
});
