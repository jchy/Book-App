const express = require("express");
const router = express.Router();
const { createBook, updateBook, getAllBooks, getBookById, deleteBookById } = require("../controller/bookController");

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").put(updateBook).delete(deleteBookById).get(getBookById);

module.exports = router;