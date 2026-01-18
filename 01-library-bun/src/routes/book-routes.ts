import { Router } from "express";
import { createBook, getBooks, getBookById } from "../controllers/book-controller";

const router = Router();

router.post("/", createBook);
router.get("/", getBooks);
router.get("/:id", getBookById);

export default router;
