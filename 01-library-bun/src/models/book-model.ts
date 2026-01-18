// ALTERNATIVA USAR MOONGOSE

// import { Schema, model } from "mongoose";

// const BookSchema = new Schema({});

// export const Book = model("Book", BookSchema);

import { Db, ObjectId } from "mongodb";

export interface Book {
    _id?: ObjectId;
    title: string;
    author: string;
    year: number;
    available: boolean;
}

export function BookCollection(db: Db) {
    return db.collection<Book>("books");
}
