import { motion } from "framer-motion";

export default function SERVICES() {
  const services = [
    { name: "Smart MedTech Solutions", image: "/medtech.jpeg",
      description:"Custom IoT-solutions for hospitals,industry & smart living.\nR&D & Prototyping with start-to-end product development.\nCollaboration with research institutions & hospitals for innovative solutions.\nDevelopment of AI-powered health monitoring systems."},
    { name: "Smart Appointment Booking", image: "/onlinebooking.jpeg",
      description:"Hassle-free patient appointment scheduling.\nSeamless video consultations for remote care.\nSecure e-prescriptions & health monitoring.\nEasy online lab test bookings for patients.\nInstant digital report generation & sharing.\n Digital patient records & history tracking.\nSecure access for doctors, staff, and admins.\nIntegrated billing & payment processing. \nAI-powered insights for better diagnosis"},
   { name: "Internship Programs", image: "/internship.jpeg",
      description:"Hands-on IoT & AI training for students.\nIndustry-driven real-time projects with expert mentorship."},
   ];

   return (
    <section style={{ backgroundColor: "#ccd8e9" }} className="py-16 px-6">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 mt-8">
        Our Services
        <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2"></span>
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }} // Start position
            animate={{ opacity: 1, x: 0 }}   // End position
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            className="flex flex-col md:flex-row items-center gap-8 ">
            {/* Image & Name (Right on large screens) */}
            <div className="md:w-1/3 flex flex-col items-center md:items-start animate-slideInLeft">
                 <p className="text-xl pl-5 pb-2 underline font-semibold text-gray-800">{service.name}</p>
               <motion.img
                 src={service.image}
                 alt={service.name}
                 className="w-[300px] h-auto object-cover rounded-lg shadow-lg"
                 whileHover={{ scale: 1.1 }} // Pop-up effect on hover
                 transition={{ type: "spring", stiffness: 200 }} // Smooth bounce effect
               />
              </div>
               {/* Description (Left on large screens) */}
               <div className="md:w-2/3 text-center md:text-left">              
                 <p className="mt-1 pt-10 text-lg text-gray-700 whitespace-pre-line leading-loose">{service.description}</p>
               </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}