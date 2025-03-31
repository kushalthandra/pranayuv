import { motion } from "framer-motion";

export default function SERVICES() {
  const services = [
    {
      name: "Smart MedTech Solutions",
      image: "/medtech.jpeg",
      description:
        "🔹 Custom IoT solutions for hospitals, industry & smart living.\n" +
        "🔹 R&D & Prototyping with start-to-end product development.\n" +
        "🔹 Collaboration with research institutions & hospitals for innovative solutions.\n" +
        "🔹 Development of AI-powered health monitoring systems.",
    },
    {
      name: "Smart Appointment Booking",
      image: "/onlinebooking.jpeg",
      description:
        "📅 Hassle-free patient appointment scheduling.\n" +
        "📹 Seamless video consultations for remote care.\n" +
        "💊 Secure e-prescriptions & health monitoring.\n" +
        "🧪 Easy online lab test bookings for patients.\n" +
        "📜 Instant digital report generation & sharing.\n" +
        "📂 Digital patient records & history tracking.\n" +
        "🔑 Secure access for doctors, staff, and admins.\n" +
        "💳 Integrated billing & payment processing.\n" +
        "🧠 AI-powered insights for better diagnosis.",
    },
    {
      name: "Internship Programs",
      image: "/internship.jpeg",
      description:
        "👨‍💻 Hands-on IoT & AI training for students.\n" +
        "🚀 Industry-driven real-time projects with expert mentorship.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-100 via-white to-blue-50">
      {/* Title with Decorative Bar */}
      <h2 className="text-5xl font-extrabold pt-10 text-gray-900 text-center mb-12">
        Our Services
        <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2 rounded-lg"></span>
      </h2>

      {/* Services List */}
      <div className="max-w-6xl mx-auto flex flex-col space-y-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-center gap-12 p-6 bg-white shadow-xl rounded-2xl border border-gray-200 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <motion.div
              className="md:w-1/3 flex justify-center"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-[320px] h-auto object-cover rounded-xl shadow-lg"
              />
            </motion.div>

            {/* Description Section */}
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.name}</h3>
              <p className="text-lg text-gray-700 whitespace-pre-line leading-loose">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
