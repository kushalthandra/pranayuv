import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

export default function PRODUCTS() {
  const router = useRouter();
  const [expanded, setExpanded] = useState(null);

  const products = [
    {
      id: 1,
      name: "RENCHAGE R0 AI-based Water Bottle",
      image: "/bottle.jpg",
      description: "An AI-powered water bottle that monitors hydration levels and provides smart reminders for optimal health."
    },
    {
      id: 3,
      name: "Ayuv Hybrid Bed V1 Bed to Wheelchair Conversion Product",
      image: "/bed.jpeg",
      description: "A revolutionary bed that converts into a wheelchair, providing ease of movement for patients and the elderly."
    },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gray-200 text-black py-20 px-4 sm:px-6 pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <motion.h1 
        className="text-4xl sm:text-5xl font-extrabold pt-7 text-gray-900 text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our Products
        <motion.span 
          className="block w-16 h-1 bg-yellow-500 mx-auto mt-2 rounded-lg"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.h1>

      {/* Product List - Grid Layout Retained */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-300 flex flex-col"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: product.id * 0.2 }}
          >
            {/* Product Image */}
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-52 sm:h-64 object-cover rounded-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Product Name */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-4">{product.name}</h2>

            {/* More Details Link */}
            <button
              onClick={() => setExpanded(expanded === product.id ? null : product.id)}
              className="text-blue-600 mt-2 underline focus:outline-none"
            >
              {expanded === product.id ? "Show Less" : "More Details"}
            </button>

            {/* Expandable Description */}
            <AnimatePresence>
              {expanded === product.id && (
                <motion.p 
                  className="mt-2 text-gray-700 bg-gray-100 p-3 rounded-lg text-left"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {product.description}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Button Section - Now Always at Bottom */}
            <div className="mt-auto">
              <motion.button
                onClick={() => router.push(`/product/${product.id}`)}
                className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Buy / Remind Me
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
