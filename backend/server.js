const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/add", (req, res) => {
    const { a, b } = req.body;

    res.json({
        result: Number(a) + Number(b)
    });
});

app.listen(3000, () => {
    console.log("Backend running");
});