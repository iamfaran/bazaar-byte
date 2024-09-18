import express from "express";
import { getAllProducts } from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// router.get is a method which is used to handle get request

// here we pass 4 parameters to the get method in this case
// but we can have multiple variable parameters in between
// however first param will always be the path
// and last param will always the main function which will be executed when the path is hit

router.get("/", protectRoute, adminRoute, getAllProducts);

export default router;
