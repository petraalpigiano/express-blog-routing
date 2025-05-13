import express from "express";
import { port } from "./data/db.js";
import postsRouter from "./routers/posts.js";
const app = express();
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Il server è in ascolto alla porta: ${port}`);
});

app.use("/posts", postsRouter);
