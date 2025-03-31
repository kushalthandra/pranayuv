import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Link from 'next/link';
import { motion } from 'framer-motion';

const slides = [
    {
      id: 1,
      title: 'Latest Updates and Product Releases',
      description: 'Discover the newest innovations.',
      image: '/sbg-img2.jpg',
      link:'pagescomponents/PRODUCTS',
    },
    {
      id: 2,
      title: 'Services We Provide',
      description: 'Explore our wide range of services.',
      image: '/sbg-img4.jpg',
      link: '/pagescomponents/SERVICES',
    },
    {
      id: 3,
      title: 'Innovative Care, Affordable Solutions',
      description: 'Bringing healthcare closer to you.',
      image: '/sbg-img3.jpg',
      link: '/home/solutions',
    },
    {
      id: 4,
      title: 'Innovate, Earn, and Grow',
      description: 'Experience the future of opportunities.',
      image: '/sbg-img2.jpg',
      link: '/home/IEG',
    },
    {
      id: 5,
      title: 'Registration',
      description: 'Join us today and be part of the change.',
      image: '/sbg-img1.jpg',
      link: '/home/registration',
    },
];

export default function SwiperComponent() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      effect="fade"
      className="h-screen mt-16"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <motion.div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            {/* Overlay */}
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1 }}
            ></motion.div>

            {/* Text Content */}
            <motion.div 
              className="relative z-10 max-w-2xl px-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            >
              <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl mb-6">{slide.description}</p>

              {/*explore Button */}
              <Link href={slide.link}>
                <motion.button 
                  className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
