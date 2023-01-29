import express from "express";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Test");
  res.send('Hello')
});
app.listen(PORT, () =>
  console.log(`Server running on port : http://localhost:${PORT}`)
);
