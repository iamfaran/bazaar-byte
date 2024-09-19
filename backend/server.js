// Server.js is the main entry point for the backend server.
// It is responsible for setting up the server, connecting to the database, and defining the routes.

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";

// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
dotenv.config();

// wrap the app in express to create a new instance of the Express application
const app = express();
const PORT = process.env.PORT || 5000;

// express json

app.use(express.json());

// cookie parser
app.use(cookieParser());

// add Auth Route

app.use("/api/auth", authRoutes);

// Product Routes

app.use("/api/products", productRoutes);

// Cart Routes

app.use("/api/cart", cartRoutes);

// Coupon Routes

app.use("/api/coupons", couponRoutes);

// we also need a listen method to start the server for the app to listen on a specific port

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  connectDB();
});

// // TESTING THE SERVER
// // send response to the client HELLO WORLD

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
