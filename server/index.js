const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const e = require("express");

// middleware
app.use(cors());
app.use(express.json()); //req.body

// Routes

// Create a new Book
app.post("/books", async (req, res) => {
  try {
    const { name, author, read_time, image, description } = req.body;
    const newBook = await pool.query(
      `INSERT INTO book (name, author, read_time, image, description) VALUES($1,$2,$3,$4,$5)`,
      [name, author, read_time, image, description]
    );
    return res.status(201).json("Book created successfully");
  } catch (err) {
    console.error(err);
  }
});

// update a book
app.put("/books/:id", async (req, res) => {
  try {
    const book_id = Number(req.params.id);
    const { name, author, read_time, image, description } = req.body;
    const updatedBook = await pool.query(
      "UPDATE book SET name=$1, author=$2, read_time=$3, image=$4, description=$5 WHERE book_id=$6",
      [name, author, read_time, image, description, book_id]
    );
    return res.status(200).json(updatedBook.rows);
  } catch (err) {
    console.error(err);
  }
});

// Get all books
app.get("/books", async (req, res) => {
  const books = await pool.query("SELECT * FROM book ORDER BY book_id ASC");
  res.status(200).json(books.rows);
});

// Get a book
app.get("/books/:id", async (req, res) => {
  const book_id = Number(req.params.id);
  const book = await pool.query("SELECT * FROM book WHERE book_id = $1", [
    book_id,
  ]);
  res.status(200).json(book.rows);
});

// delete a book
app.delete("/books/:id", async (req, res) => {
  const id = Number(req.params.id);
  const book = await pool.query("DELETE FROM book WHERE book_id=$1", [id]);
  res.status(200).json("Book deleted successfully");
});

app.listen(5001, () => {
  console.log("listening on port 5001");
});
