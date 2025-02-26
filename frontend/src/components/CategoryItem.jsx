import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategoryItem = ({ category }) => {
  return (
    <motion.div
      className="relative h-80 w-full bg-surface rounded-xl shadow-glow overflow-hidden group"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={"/category" + category.href} className="w-full h-full flex">
        {/* Image Section */}
        <div className="w-1/2 h-full overflow-hidden">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Info Section */}
        <div className="w-1/2 h-full flex flex-col justify-between p-4 bg-surface relative z-10">
          <div>
            <h3 className="text-text text-xl font-bold mb-2">
              {category.name}
            </h3>
            <p className="text-text/70 text-sm">
              Explore {category.name} collection
            </p>
          </div>
          <div className="flex justify-end">
            <motion.span
              className="inline-flex items-center text-accent text-sm font-medium group-hover:text-secondary transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Shop Now
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.span>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </Link>
    </motion.div>
  );
};

export default CategoryItem;
