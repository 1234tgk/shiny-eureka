import express from "express";
import testRoutes from "./routes/test.js";
import studentRoutes from "./routes/student.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/test", testRoutes);
app.use("/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
