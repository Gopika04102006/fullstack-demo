const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/add", (req, res) => {
  const { a, b } = req.body;

  const sum = Number(a) + Number(b);

  res.json({
    result: sum
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});