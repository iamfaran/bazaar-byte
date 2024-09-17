import mongoose from "mongoose";

/**
 * Represents a product in the Bazaar Byte application.
 *
 * @typedef {Object} Product
 * @property {string} name - The name of the product.
 * @property {string} description - The description of the product.
 * @property {number} price - The price of the product.
 * @property {string} image - The image URL of the product.
 * @property {string} category - The category of the product.
 * @property {boolean} isFeatured - Indicates if the product is featured.
 * @property {Date} createdAt - The date and time when the product was created.
 * @property {Date} updatedAt - The date and time when the product was last updated.
 */
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    category: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
