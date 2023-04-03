const pool = require("../config/db");
const createBook = async (req, res) => {
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
};

const updateBook = async (req, res) => {
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
};

const getAllBooks = async (req, res) => {
    const books = await pool.query("SELECT * FROM book ORDER BY book_id ASC");
    res.status(200).json(books.rows);
};

const getBookById = async (req, res) => {
    const book_id = Number(req.params.id);
    const book = await pool.query("SELECT * FROM book WHERE book_id = $1", [
      book_id,
    ]);
    res.status(200).json(book.rows);
}

const deleteBookById = async (req, res) => {
    const id = Number(req.params.id);
    const book = await pool.query("DELETE FROM book WHERE book_id=$1", [id]);
    res.status(200).json("Book deleted successfully");
}

module.exports = { createBook, updateBook , getAllBooks, getBookById, deleteBookById }