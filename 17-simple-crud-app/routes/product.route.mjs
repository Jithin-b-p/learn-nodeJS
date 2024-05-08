import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} from "../controllers/product.controller.mjs";

const router = Router();

// getting all products.
router.get("/", getAllProducts);

// getting products by id.
router.get("/:id", getProductById);

// creating product.
router.post("/create", createProduct);

// updating product by id.
router.put("/:id", updateProductById);

// deleting product.
router.delete("/:id", deleteProductById);

export default router;
