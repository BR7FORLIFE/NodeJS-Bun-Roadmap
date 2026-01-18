import { connectDB } from "../config/connectDB";
import { BookCollection, type Book } from "../models/book-model";
import { ObjectId } from "mongodb";

const db = await connectDB();
const bookCollection = BookCollection(db);

export async function save(book: Book) {
  return await bookCollection.insertOne(book);
}

export async function findAll() {
  return await bookCollection.find().toArray();
}

export async function findById(id: string) {
  return await bookCollection.findOne({ _id: new ObjectId(id) });
}
