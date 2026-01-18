import express from "express";
import bookRoutes from "./src/routes/book-routes";

const app = express();

app.use(express.json());
app.use("/books", bookRoutes);

export default app;
