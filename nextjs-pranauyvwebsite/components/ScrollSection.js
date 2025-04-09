'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'Latest Updates & Product Releases',
    description: 'Discover the latest advancements in our product line and upcoming releases.',
    link: '/pagescomponents/Blogandupdates',
    image: '/updates.jpg',
  },
  {
    id: 2,
    title: 'AI & IoT Innovations',
    description: 'Next-gen healthcare technology powered by AI and IoT.',
    link: '/home/ai-iot',
    image: 'ai-iot.jpg',
  },
  {
    id: 3,
    title: 'Seamless Hospital Management',
    description: 'Digitizing medical records and improving hospital efficiency.',
    link: '/home/hospitals',
    image: '/hospital.jpg',
  },
  {
    id: 4,
    title: 'Smart Health Monitoring',
    description: 'Real-time AI-powered insights for proactive healthcare.',
    link: '/home/monitoring',
    image: '/monitoring.jpg',
  },
  {
    id: 5,
    title: 'Internship & Training Programs',
    description: 'Learn from industry experts and gain hands-on experience.',
    link: '/home/internships',
    image: '/internship.jpg',
  },
];

export default function ScrollSection() {
  return (
    <section className="relative bg-[#e5e9ed] py-24 overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(6)].map((_, i) => {
          const size = 60 + Math.random() * 80;
          return (
            <motion.div
              key={i}
              className="absolute bg-blue-300 opacity-20 rounded-full blur-3xl"
              style={{
                width: size,
                height: size,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -40, 0] }}
              transition={{ duration: 20 + i, repeat: Infinity, delay: i * 0.2 }}
            />
          );
        })}
      </div>

      {/* Scrollable Cards Section */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16">
        <div className="border-4 border-black rounded-2xl overflow-x-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-200 bg-white/40 backdrop-blur-lg shadow-2xl">
          <div className="flex gap-6 px-8 py-8 w-max">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                className="flex-shrink-0 w-[90vw] sm:w-[400px] bg-white shadow-xl rounded-2xl p-6 transition-all select-text"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={slide.image}
                  alt={`Slide - ${slide.title}`}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  loading="lazy"
                />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{slide.title}</h2>
                <p className="text-gray-700 mb-4">{slide.description}</p>
                <Link href={slide.link}>
                  <motion.button
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-md rounded-xl shadow-md hover:from-blue-600 hover:to-blue-800 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Swipe Hint for Mobile */}
        <p className="mt-4 text-center text-sm text-gray-600 sm:hidden">
          Swipe to next →
        </p>
      </div>
    </section>
  );
}
