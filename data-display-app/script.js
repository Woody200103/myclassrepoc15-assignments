// Sample data: an array of book objects
const books = [
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
        year: 1943
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
  }
];
// Get the container element from index.html
const container = document.getElementById("data-container");
// Loop through each book object in the array
if (books.length === 0) {
  const emptyMsg = document.createElement("p");
  emptyMsg.textContent = "No books to display right now.";
  container.appendChild(emptyMsg);
  } else {
  for (const book of books) {
    // ... (existing loop code) ...
  }
}

for (const book of books) {
  // 1. Create a wrapper div for this book
   const card = document.createElement("div");
  card.classList.add("item-card");

  // 2. Create an element for the book title
  const titleEl = document.createElement("h2");
  titleEl.classList.add("item-title");
  titleEl.textContent = book.title;

  // 3. Create a paragraph for author and year
  const detailsEl = document.createElement("p");
  detailsEl.classList.add("item-details");
  detailsEl.textContent = `by ${book.author} (${book.year})`;

  // 4. Put title and details inside the card
  card.appendChild(titleEl);
  card.appendChild(detailsEl);

  // 5. Add this card to the main container
  container.appendChild(card);
}
