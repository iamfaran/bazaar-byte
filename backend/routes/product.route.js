import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getFeaturedProducts,
  getRecommendedProducts,
  getProductsByCategory,
  toggleFeaturedProduct,
} from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// router.get is a method which is used to handle get request

// here we pass 4 parameters to the get method in this case
// but we can have multiple variable parameters in between
// however first param will always be the path
// and last param will always the main function which will be executed when the path is hit

router.get("/", protectRoute, adminRoute, getAllProducts);

// below route will be accessible to all users so we don't need to protect it hence no middleware (protectRoute) is passed

router.get("/featured", getFeaturedProducts);

// create a new route for create product

router.post("/", protectRoute, adminRoute, createProduct);

// create a new route for delete product

router.delete("/:id", protectRoute, adminRoute, deleteProduct);

// get recommended products
router.get("/recommendations", getRecommendedProducts);

// get products by category
router.get("/category/:category", getProductsByCategory);

// toggle featured product
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);

export default router;
