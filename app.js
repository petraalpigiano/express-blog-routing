import express from "express";
import { port } from "./data/db.js";
const app = express();

app.listen(port, () => {
  console.log(`Il server è in ascolto alla porta: ${port}`);
});
