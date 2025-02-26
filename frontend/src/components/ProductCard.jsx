import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { user } = useUserStore();
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add products to cart", { id: "login" });
      return;
    } else {
      addToCart(product);
    }
  };

  return (
    <motion.div
      className="flex w-full max-w-xs flex-col overflow-hidden rounded-xl bg-surface border border-primary/20 shadow-glow group"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={product.image}
          alt={product.name}
        />
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-opacity duration-300" />
      </div>

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h5 className="text-xl font-semibold text-text truncate">
            {product.name}
          </h5>
          <p className="mt-2 text-2xl font-bold text-accent">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <button
          className="mt-4 flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-text hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={20} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
