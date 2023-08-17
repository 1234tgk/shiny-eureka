import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.route("/").get((req, res) => {
  res.json({
    message: "this is a test",
    anotherMessage: "this is a test, really",
  });
});

router.route("/jokes").get((req, res) => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      res.json(data);
    });
});

export default router;
