import { motion } from "framer-motion";
import { useRouter } from "next/router";

  export default function PRODUCTS() {
    
  const router = useRouter();

  const products = [
        {
          id: 1,
          name: "RENCHAGE R0 AI-based Water Bottle",
          image: "/bottle.jpg", // Replace with your uploaded image path
        },
        {
          id: 2,
          name: "AyuvWalk A Diabetic Shoe",
          image: "/shoe.jpeg", // Replace with your uploaded image path
        },
        {
          id: 3,
          name: "Ayuv Hybrid Bed V1 Bed to Wheelchair Conversion Product",
          image: "/bed.jpeg", // Replace with your uploaded image path
        },
      ];
    
      return (
        <div className="h-screen bg-black text-white py-20 px-6 pt-24">
          <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
    
          {/* Product List */}
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-800 p-6 rounded-lg text-center">
                {/* Product Image */}
                {/* Image with Motion Effect */}
            <motion.img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 object-cover rounded-lg"
              whileHover={{ scale: 1.1 }} // Pops up on hover
              transition={{ duration: 0.3 }}
            />
    
                {/* Product Name */}
                <h2 className="text-2xl font-semibold mt-4">{product.name}</h2>
    
                {/* Notify Me Button */}
                <button
                onClick={() => router.push("/pagescomponents/Remindmeform")}
                className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  Remind me 
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }