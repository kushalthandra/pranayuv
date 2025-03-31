import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-gray-200 pt-24 py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/iot.jpeg" 
            alt="Our Story" 
            className="w-full max-w-md h-auto rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl pt-7 font-extrabold text-gray-800 mb-2 pl-2">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in <span className="font-semibold text-blue-900">2025</span>, <span className="font-bold text-blue-700">Pranaayuv</span> is on a mission to revolutionize healthcare accessibility through <span className="text-blue-700 font-semibold">cutting-edge technology</span> and AI-driven solutions.
          </p>

          <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li className="flex items-start space-x-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span>Bridging the gap between patients, hospitals, and diagnostic centers for seamless healthcare management.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span>Empowering small hospitals, clinics, and labs with the latest in AI, automation, and IoT-powered healthcare solutions.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span>Developing the <span className="font-bold">Pranaayuv App</span>, an all-in-one platform for appointment booking, diagnostic test scheduling, and hospital automation.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-600 text-xl">✔</span>
              <span>Expanding into AI-powered smart devices, IoT-driven patient monitoring, and personalized digital healthcare experiences.</span>
            </li>
          </ul>
        </motion.div> 
      </div>
    </section>
  );
}
