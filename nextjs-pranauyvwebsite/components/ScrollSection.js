import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const slides = [
  { id: 1, title: 'Latest Updates & Product Releases', description: 'Discover the latest advancements in our product line and upcoming releases.', link: 'pagescomponents/Blogandupdates', image: '/mnt/data/A_2D_digital_graphic_layout_showcases_five_rectang.png' },
  { id: 2, title: 'AI & IoT Innovations', description: 'Next-gen healthcare technology powered by AI and IoT.', link: '/home/ai-iot', image: '/mnt/data/A_2D_digital_graphic_layout_showcases_five_rectang.png' },
  { id: 3, title: 'Seamless Hospital Management', description: 'Digitizing medical records and improving hospital efficiency.', link: '/home/hospitals', image: '/mnt/data/A_2D_digital_graphic_layout_showcases_five_rectang.png' },
  { id: 4, title: 'Smart Health Monitoring', description: 'Real-time AI-powered insights for proactive healthcare.', link: '/home/monitoring', image: '/mnt/data/A_2D_digital_graphic_layout_showcases_five_rectang.png' },
  { id: 5, title: 'Internship & Training Programs', description: 'Learn from industry experts and gain hands-on experience.', link: '/home/internships', image: '/mnt/data/A_2D_digital_graphic_layout_showcases_five_rectang.png' },
];

export default function ScrollSection() {
  return (
    <section className="bg-[#f8f9fa] py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid gap-16">
        {slides.map((slide, index) => (
          <FadeInSection key={slide.id} index={index} slide={slide} />
        ))}
      </div>
    </section>
  );
}

function FadeInSection({ slide, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white shadow-lg rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img src={slide.image} alt={slide.title} className="w-full h-auto rounded-lg shadow-md" />
      </div>

      {/* Title & Description */}
      <div className="text-left w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{slide.title}</h2>
        <p className="text-lg text-gray-700 mb-6">{slide.description}</p>
        <Link href={slide.link}>
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}