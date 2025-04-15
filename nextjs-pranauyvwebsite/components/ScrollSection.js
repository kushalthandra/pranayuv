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
    <section className="relative bg-gradient-to-b from-[#e5e9ed] via-white to-[#e5e9ed] py-24 overflow-hidden">
      {/* Background Blobs */}
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

      {/* Scroll Cards */}
      <div className="relative z-10 px-4 sm:px-10 lg:px-16">
        <div className="rounded-2xl overflow-x-auto bg-white/30 backdrop-blur-md shadow-lg border border-white/40 p-4 sm:p-6">
          <div className="flex gap-6 px-4 py-6 w-max scroll-smooth overflow-x-auto scroll-snap-x snap-x">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                className="flex-shrink-0 w-[85vw] sm:w-[400px] bg-white/70 shadow-md border border-gray-200 backdrop-blur-lg rounded-2xl p-5 hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 snap-start"
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{slide.title}</h2>
                <p className="text-gray-700 mb-4">{slide.description}</p>
                <Link href={slide.link}>
                  <motion.button
                    className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition"
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
      </div>

      {/* Hint */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Swipe or scroll to explore →
      </p>
    </section>
  );
}
