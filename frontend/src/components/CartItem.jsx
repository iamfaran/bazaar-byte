import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";
import { motion } from "framer-motion";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCartStore();

  return (
    <motion.div
      className="rounded-xl border border-primary/20 p-4 bg-surface shadow-glow md:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        {/* Image */}
        <div className="shrink-0 md:order-1">
          <img
            className="h-20 md:h-24 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            src={item.image}
            alt={item.name}
          />
        </div>

        {/* Quantity & Price */}
        <div className="flex items-center justify-between md:order-3 md:justify-end gap-6">
          <div className="flex items-center gap-2">
            <button
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-background hover:bg-primary text-text focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-300"
              onClick={() => updateQuantity(item._id, item.quantity - 1)}
            >
              <Minus size={14} />
            </button>
            <p className="text-text font-medium">{item.quantity}</p>
            <button
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-background hover:bg-primary text-text focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-300"
              onClick={() => updateQuantity(item._id, item.quantity + 1)}
            >
              <Plus size={14} />
            </button>
          </div>
          <div className="text-end md:order-4 md:w-24">
            <p className="text-base font-bold text-accent">
              ${item.price.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Name, Description, Remove */}
        <div className="w-full min-w-0 flex-1 space-y-2 md:order-2 md:max-w-md group">
          <p className="text-base font-medium text-text hover:text-accent transition-colors duration-300 truncate">
            {item.name}
          </p>
          <p className="text-sm text-text/70 line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-center gap-4">
            <button
              className="inline-flex items-center text-sm font-medium text-red-400 hover:text-red-300 transition-colors duration-300"
              onClick={() => removeFromCart(item._id)}
            >
              <Trash size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
