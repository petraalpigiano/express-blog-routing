import express, { Router } from "express";
const router = express.Router();

// INDEX
router.get("/", (req, res) => {
  res.send("Mostro tutti i post");
});
// SHOW
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Ecco il post numero: ${id}`);
});
// CREATE
router.post("/", (req, res) => {
  res.send("Ho creato un nuovo post");
});
// UPDATE
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Ho modificato interamente il post numero: ${id}`);
});
// MODIFY
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Ho modificato parzialmente il post numero: ${id}`);
});
// DELETE
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Ho eliminato il post numero: ${id}`);
});

export default router;
