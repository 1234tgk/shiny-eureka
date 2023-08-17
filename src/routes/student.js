import express from "express";
import { read, create, update } from "../crud.js";

const router = express.Router();

router.get("/", (req, res) => {
  const data = read();

  res.json({
    data,
  });
});

router.post("/", (req, res) => {
  const body = req.body;

  create(body);

  res.status(204).json({});
});

router.put("/", (req, res) => {
  const body = req.body;

  update(body);

  res.status(204).json({});
});

export default router;
