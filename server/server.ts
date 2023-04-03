const express = require("express");
const app = express();
const cors = require("cors");
const { createBook, updateBook, getAllBooks, getBookById, deleteBookById } = require("./controller/bookController");

// middleware
app.use(cors());
app.use(express.json()); //req.body

// Routes

// Create a new Book
app.post("/books", createBook);

// update a book
app.put("/books/:id", updateBook);

// Get all books
app.get("/books",getAllBooks);

// Get a book
app.get("/books/:id", getBookById);

// delete a book
app.delete("/books/:id", deleteBookById);

app.listen(5001, () => {
  console.log("listening on port 5001");
});

