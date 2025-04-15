import { motion } from "framer-motion";

export default function SERVICES() {
  const services = [
    {
      name: "Smart MedTech Solutions",
      image: "/medtech.jpeg",
      description: [
        "IoT-based systems for hospitals & smart environments.",
        "Full-cycle product development: from prototype to deployment.",
        "Collaborative projects with institutions and healthcare.",
        "AI-powered diagnostics and health monitoring tools.",
      ],
    },
    {
      name: "Smart Appointment Booking",
      image: "/onlinebooking.jpeg",
      description: [
        "Intuitive online booking & telehealth consultations.",
        "Secure prescriptions, lab reports, and patient history.",
        "Role-based access for doctors, staff & admins.",
        "AI-powered data analysis & automated billing.",
      ],
    },
    {
      name: "Internship Programs",
      image: "/internship.jpeg",
      description: [
        "Project-based learning with hands-on IoT & AI tools.",
        "Mentorship from industry experts on real-time products.",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold  text-blue-900 pt-7"
        >
          What We Offer
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our innovative services designed to improve healthcare experiences and empower the next generation of tech creators.
        </p>
      </div>

      {/* Service Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={service.image}
              alt={service.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {service.name}
              </h3>
              <ul className="text-gray-700 text-base space-y-2 list-disc list-inside text-left flex-grow">
                {service.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
