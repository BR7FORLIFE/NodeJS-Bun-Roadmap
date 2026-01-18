import { MongoClient, Db } from "mongodb";

const URI = process.env.MONGO_URI!;
const DB_NAME = process.env.MONGO_DB!;

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectDB(): Promise<Db> {
  if (!client) {
    client = new MongoClient(URI);
    await client.connect();
    db = client.db(DB_NAME);
    console.log("✅ Mongo conectado");
  }

  return db!;
}
