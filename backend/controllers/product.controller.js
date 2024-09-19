import Product from "../models/product.model.js";
import { redis } from "../lib/redis.js";
import cloudinary from "../lib/cloudinary.js";

export const getAllProducts = async (req, res) => {
  // for now I am just testing this route
  // so just send a response with a message that allProducts route is working
  res.json({ message: "All Products route is working" });
};

// This function is an asynchronous Express route handler for getting featured products
export const getFeaturedProducts = async (req, res) => {
  try {
    // Attempt to retrieve featured products from Redis cache
    let featuredProducts = await redis.get("featured_products");

    // If featured products are found in Redis cache
    if (featuredProducts) {
      // Parse the JSON string stored in Redis back into a JavaScript object
      // and immediately send it as a response, ending the function execution
      return res.json(JSON.parse(featuredProducts));
    }

    // If not in Redis, fetch featured products from MongoDB
    // The .find() method queries the Product collection for documents where isFeatured is true
    // .lean() returns a plain JavaScript object instead of a Mongoose document
    // This is more efficient when you don't need Mongoose's document methods
    featuredProducts = await Product.find({ isFeatured: true }).lean();

    // If no featured products are found in the database
    if (!featuredProducts) {
      // Send a 404 (Not Found) response with an explanatory message
      return res.status(404).json({ message: "No featured products found" });
    }

    // If featured products are found, store them in Redis for future quick access
    // JSON.stringify converts the JavaScript object to a JSON string for storage
    await redis.set("featured_products", JSON.stringify(featuredProducts));

    // Send the featured products as a JSON response
    res.json(featuredProducts);
  } catch (error) {
    // If any error occurs during the process, it will be caught here

    // Log the error message for server-side debugging
    console.log("Error in getFeaturedProducts controller", error.message);

    // Send a 500 (Internal Server Error) response with an error message
    // Including error.message can be helpful for debugging but might expose sensitive info in production
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// This function is an asynchronous Express route handler for creating a new product

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;

    let cloudinaryResponse = null;

    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, {
        folder: "products",
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      image: cloudinaryResponse?.secure_url
        ? cloudinaryResponse.secure_url
        : "",
      category,
    });

    res.status(201).json(product);
  } catch (error) {
    console.log("Error in createProduct controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// This function is an asynchronous Express route handler for deleting a product

export const deleteProduct = async (req, res) => {
  try {
    // Find the product by ID in the database
    const product = await Product.findById(req.params.id);

    // If the product is not found, send a 404 (Not Found) response with an error message
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // If the product has an image, extract the public ID from the URL
    if (product.image) {
      const publicId = product.image.split("/").pop().split(".")[0];
      try {
        // Attempt to delete the image from Cloudinary using the public ID
        await cloudinary.uploader.destroy(`products/${publicId}`);
        console.log("deleted image from cloduinary");
      } catch (error) {
        console.log("error deleting image from cloduinary", error);
      }
    }
    // Delete the product from the database
    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error in deleteProduct controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
