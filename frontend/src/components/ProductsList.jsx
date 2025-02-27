import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const ProductsList = () => {
  const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();

  console.log("products", products);

  return (
    <motion.div
      className="bg-surface shadow-glow rounded-xl max-w-4xl mx-auto border border-primary/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full divide-y divide-primary/30">
          <thead className="bg-background">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text/70 uppercase tracking-wider whitespace-nowrap"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text/70 uppercase tracking-wider whitespace-nowrap"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text/70 uppercase tracking-wider whitespace-nowrap"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text/70 uppercase tracking-wider whitespace-nowrap"
              >
                Featured
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text/70 uppercase tracking-wider whitespace-nowrap"
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-primary/30">
            {products?.map((product) => (
              <motion.tr
                key={product._id}
                className="hover:bg-primary/10 transition-colors duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-text truncate max-w-xs">
                        {product.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-accent">
                    ${product.price.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-text/70">{product.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <motion.button
                    onClick={() => toggleFeaturedProduct(product._id)}
                    className={`p-1 rounded-full ${
                      product.isFeatured
                        ? "bg-yellow-400 text-gray-900"
                        : "bg-surface text-text/70 border border-primary/30"
                    } hover:bg-yellow-500 transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Star className="h-5 w-5" />
                  </motion.button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <motion.button
                    onClick={() => deleteProduct(product._id)}
                    className="text-red-400 hover:text-red-300 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash className="h-5 w-5" />
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsList;
