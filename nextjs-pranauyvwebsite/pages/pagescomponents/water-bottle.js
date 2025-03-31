import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function WaterBottlePage() {
  const router = useRouter();

  return (
    <motion.div 
      className="min-h-screen bg-white text-black py-20 px-4 sm:px-6 pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Product Hero Section */}
      <section className="flex flex-col pt-7 lg:flex-row items-center justify-center text-center lg:text-left">
        <motion.img
          src="/water-bottle.jpg" 
          alt="RENCHAGE R0 AI-based Water Bottle"
          className="w-full sm:w-1/2 max-w-lg rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="lg:ml-10 max-w-lg">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            RENCHAGE R0 AI-based Water Bottle
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Stay hydrated intelligently with the AI-powered water bottle that tracks your hydration levels and reminds you when to drink.
          </motion.p>
          <motion.button
            onClick={() => router.push("/pagescomponents/Remindmeform")}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Remind me
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20 max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl font-semibold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Smart Hydration Features
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div 
            className="p-6 bg-gray-100 rounded-xl shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">AI Hydration Monitoring</h3>
            <p className="text-gray-600 mt-2">Tracks your water intake and reminds you to drink when needed.</p>
          </motion.div>
          <motion.div 
            className="p-6 bg-gray-100 rounded-xl shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold">Temperature Control</h3>
            <p className="text-gray-600 mt-2">Keeps your water at the ideal temperature for hours.</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}