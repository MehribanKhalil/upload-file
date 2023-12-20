import express from "express";
import {
  getAllBooks,
  getBookById,
  addBook,
  deleteBook,
  updateBook,
} from "../controllers/books.js";

const router = express.Router();

//ADD
router.post("/", addBook);
//UPDATE
router.put("/:id", updateBook);
//DELETE
router.delete("/:id", deleteBook);
//GET
router.get("/:id", getBookById);
//GET ALL
router.get("/", getAllBooks);

export default router;
