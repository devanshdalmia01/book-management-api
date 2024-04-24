import { Router } from "express";
import { auth } from "../middleware/authMiddleware";
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from "../controllers/bookController";

const router = Router();

router.post("/", auth, createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.put("/:id", auth, updateBook);
router.delete("/:id", auth, deleteBook);

export default router;
