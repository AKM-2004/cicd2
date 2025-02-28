import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello bhaiyo");
});

app.listen(8000);
