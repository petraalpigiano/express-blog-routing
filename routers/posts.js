import express from "express";
const router = express.Router();

// INDEX
router.get("/", (req, res) => {
  res.send("Mostro tutti i post");
});
// SHOW
// CREATE
// UPDATE
// DELETE

export default router;
