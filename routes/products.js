import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const products = [
 
];

router.get("/products", (req, res) => {
  res.send(products);
});

router.post("/", (req, res) => {
  const product = req.body;

  const productWithId = {...product , id: uuidv4()} 
  products.push(productWithId);

  res.send(
    `${product.category} of ${product.name} has been added to the database`
  );
});

router.get("/products/:id",(req,res) => {
    const {id} = req.params;
    const foundProduct = products.find((product) => product.id === id);
    res.send(foundProduct)

})

export default router;
