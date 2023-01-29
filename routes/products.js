import express from "express";
import {
  showProduct,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/Products.js";

const router = express.Router();



router.get("/products", showProduct);

router.post("/", createProduct);

router.get("/products/:id", getProduct);

router.delete("/products/:id", deleteProduct);

router.patch("/products/:id",updateProduct);

export default router;
