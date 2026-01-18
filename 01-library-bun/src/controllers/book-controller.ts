// controllers/book-controller.ts
import type { Request, Response } from "express";
import * as service from "../services/book-service";
import type { Book } from "../models/book-model";

export async function createBook(req: Request, res: Response) {
  try {
    const book: Book = req.body;

    const result = await service.createBook(book);

    res.status(201).json({
      message: "Book created",
      id: result.insertedId
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating book" });
  }
}

export async function getBooks(req: Request, res: Response) {
  try {
    const books = await service.getBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
}

export async function getBookById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const book = await service.getBookById(id!);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book" });
  }
}
