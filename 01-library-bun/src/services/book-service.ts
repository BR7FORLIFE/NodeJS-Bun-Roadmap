// services/book-service.ts
import * as repo from "../repository/book-repository";
import { type Book } from "../models/book-model";

export async function createBook(book: Book) {
    return repo.save(book);
}

export async function getBooks() {
    return repo.findAll();
}

export async function getBookById(id: string) {
    return repo.findById(id);
}
