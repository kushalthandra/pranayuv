import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Link from 'next/link';

  {/*
      Mapping through the 'slides' array using .map()
     - .map() is a JavaScript function that loops through an array and returns a new array with transformed elements.
     - Here, it creates a div for each slide dynamically.
     - 'slide' represents each object in the 'slides' array, while 'index' is its position in the array.
 */}
const slides = [
    {
      id: 1,
      title: 'latest updates and product releases',
      description: 'Discover .',
      image: '/sbg-img1.jpeg', // Add image inside /public folder
      link:'pagescomponents/PRODUCTS', // page route
    },
    {
      id: 2,
      title: 'Services We provide',
      description: '.....why....',
      image: '/sbg-img2.jpeg',
      link: '/pagescomponents/SERVICES',
    },
    {
      id: 3,
      title: 'Innovative Care, Affordable Solutions',
      description: '....hello....',
      image: '/sbg-img3.jpeg',
      link: '/home/sloutions',
    },
    {
      id: 4,
      title: 'Innovate, Earn, and Grow',
      description: 'Experience',
      image: '/sbg-img2.jpeg',
      link: '/home/IEG',
    },
    {
      id: 5,
      title: 'Registration',
      description: '.....the......',
      image: '/sbg-img1.jpeg',
      link: '/home/registration',
    },
  ];
export default function SwiperComponent() {
  return (
    <Swiper
       /* 
         modules: Enables additional Swiper features.
         - Navigation: Adds next/previous arrows for manual sliding.
         - Pagination: Adds clickable dots for users to jump between slides.
         - Autoplay: Automatically changes slides after a delay.
         - EffectFade: Applies a fade transition effect instead of a sliding motion.
         - delay: 5000 → Moves to the next slide every 5 seconds.
         - disableOnInteraction: false → Keeps autoplay active even if the user interacts with the slider
          loop: Enables infinite scrolling.
         - When 'true', Swiper continuously loops slides instead of stopping at the last slide.
       */
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
          <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Text Content */}
            <div className="relative z-10 max-w-2xl px-6 text-white">
              <h2 className="text-5xl font-bold mb-4 animate-fadeInUp">{slide.title}</h2>
              <p className="text-xl mb-6 animate-fadeInUp">{slide.description}</p>

              {/* Read More Button. the linked pages are in pages/home */}
              <Link href={slide.link}>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition animate-fadeInUp">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
