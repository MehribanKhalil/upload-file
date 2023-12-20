import Books from "../model/book.js";

//Get All Categories
export const getAllBooks = async (req, res) => {
  try {
    const books = await Books.find({});
    res.send(books);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Get Book by Id
export const getBookById = async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    res.send(book);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Add new Book
export const addBook = async (req, res) => {
  try {
    const book = new Books(req.body);
    await book.save();
    res.send(book);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Delete Book
export const deleteBook = async (req, res) => {
  try {
    await Books.findByIdAndDelete(req.params.id);
    res.send(Books);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Updata Book
export const updateBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndUpdate(req.params.id, req.body);
    res.send(book);
  } catch (error) {
    res.status(500).json({ message: error});
  }
};
