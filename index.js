import express from "express";
import bodyParser from "body-parser";
import productRoutes from './routes/products.js'

const app = express();

const PORT = 4000;
app.use(bodyParser.json());
app.use('/', productRoutes)


app.get("/", (req, res) => {
  res.send("Welcome to the CRUD Restful Api")
});


app.listen(PORT, () =>
  console.log(`Server running on port : http://localhost:${PORT}`)
);
