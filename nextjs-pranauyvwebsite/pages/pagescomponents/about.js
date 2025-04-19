import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


export default function About() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50 to-white text-gray-800 px-6 space-y-24">

      {/* Hero Section with background */}
      <section className="relative w-full text-center py-28 mt-7 px-6 rounded-xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-[url('/medtech-bg.jpg')] bg-cover bg-center opacity-100 " />
        <div className="absolute inset-0 bg-white/70 " />
        <div className="relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-cyan-500 drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Lives through Innovation in MedTech
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto pt-5 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            At <span className="font-semibold text-blue-700">Pranayuv</span>, we build smart healthcare solutions rooted in empathy, driven by design, and powered by AI & IoT.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a href="#contact" className="inline-block mt-8 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow-lg transition duration-300">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Our Story and Vision */}
      <section className="max-w-7xl mx-auto space-y-12">
  {/* Our Story */}
 <motion.div 
  className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 items-start backdrop-blur-lg bg-white bg-opacity-60 p-6 rounded-xl shadow-xl"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="w-full lg:w-1/3">
    <img 
      src="/our-story.jpg" 
      alt="Our Story" 
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />
  </div>

  <div className="w-full lg:w-2/3 space-y-6">
    <h2 className="text-3xl font-bold text-blue-800">Our Story</h2>
    <p className="text-lg leading-relaxed text-gray-700">
      Founded in <strong>April 2025</strong> by <strong>P.S. Rama Krishna</strong>, Pranayuv is a medtech innovation startup based in Vijayawada, India. What began as a student-led initiative in the labs of the Department of Electrical and Electronics Engineering, Siddhartha Academy of Higher Education, has now evolved into a purpose-driven company creating real-world healthcare solutions.
    </p>
    <p className="text-lg leading-relaxed text-gray-700">
      The journey started with a bold idea—designing a solution to reduce the daily challenges faced by bedridden patients and their caregivers. This led to the development of the <strong>Ayuv Hybrid Convertible Bed</strong>—a smart bed-to-wheelchair system that integrates IoT health monitoring, gesture control, and automated sanitation. It was more than just a project—it was a promise to improve lives through intelligent design.
    </p>
    <p className="text-lg leading-relaxed text-gray-700">
      Building on this innovation, the team launched the <strong>AyuvDrop Smart Water Bottle</strong> to promote healthy hydration — each product rooted in empathy and engineered for impact.
    </p>
  </div>
</motion.div>


  {/* Our Vision */}
  <motion.div 
  className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 items-center backdrop-blur-lg bg-white bg-opacity-60 p-6 rounded-xl shadow-xl"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="w-full lg:w-1/3">
    <img 
      src="/our-vision-image.jpg" 
      alt="Our Vision" 
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />
  </div>

  <div className="w-full lg:w-2/3 space-y-6 text-justify text-gray-700">
    <h2 className="text-3xl font-bold text-blue-800">Our Vision</h2>
    <p className="text-lg leading-relaxed">
      At <strong>Pranayuv</strong>, we envision a world where healthcare is smarter, more compassionate, and accessible to all. We’re on a mission to build innovative wellness products that are both technologically advanced and affordable, making them ideal for individuals, caregivers, and medical institutions alike.
    </p>
    <p className="text-lg leading-relaxed">
      We believe that:
    </p>
    <ul className="list-disc list-inside text-lg leading-relaxed space-y-1">
      <li>Innovation begins with empathy.</li>
      <li>Small teams can create a big impact.</li>
      <li>Accessible healthcare is a right, not a luxury.</li>
    </ul>
    <p className="text-lg leading-relaxed">
      From a college lab project to a recognized medtech startup, our journey has just begun. With every product we launch and every life we touch, we move closer to our goal of making healthcare personal, proactive, and powerful.
    </p>
  </div>
</motion.div>

</section>


      {/* Core Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 via-white to-purple-100 rounded-3xl shadow-inner">
  <h2 className="text-4xl font-extrabold text-center mb-16 text-blue-800">Leadership</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      {
        name: "Ajay Polavarapu",
        role: "Director - Operations",
        linkedin: "https://linkedin.com/in/ajay-polavarapu-04a293255",
        img: "/ajay.png"
      },
      {
        name: "Sandeepthi Chitturi",
        role: "Clinical & Research Lead",
        linkedin: "https://linkedin.com/in/sandeepthi-chitturi",
        img: "/sandeepthi.png"
      },
      {
        name: "Rayyan",
        role: "Tech Lead - Hardware",
        linkedin: "https://linkedin.com",
        img: "/rayyan.png"
      },
      {
        name: "Kushal Thandra",
        role: "Tech Lead - Software",
        linkedin: "https://linkedin.com/in/kushal-thandra-ab2465189",
        img: "/kushal.png"
      },
      {
        name: "Dr. Srinivasarao Gummadi",
        role: "Director – Advisory",
        linkedin: "https://linkedin.com/in/dr-srinivasa-rao-gummadi-542a0771",
        img: "/srinivas.png"
      }
    ].map((p, i) => (
      <motion.div
      key={i}
      className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all hover:shadow-2xl hover:scale-[1.04] hover:bg-white/50 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/10 pointer-events-none rounded-2xl"></div>
    
      <img
        src={p.img}
        alt={p.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow-lg z-10 relative"
      />
    
      <h3 className="text-xl font-semibold text-gray-900 z-10 relative">{p.name}</h3>
      <p className="text-sm text-gray-700 mb-2 z-10 relative">{p.role}</p>
    
      <p className="text-sm text-gray-600 z-10 relative leading-relaxed">
        {p.name === "Ajay Polavarapu" && "Heads daily operations with precision and strategic vision, ensuring seamless workflow across teams."}
        {p.name === "Sandeepthi Chitturi" && "Leads clinical validation and medical research, bridging healthcare needs with technological innovation."}
        {p.name === "Rayyan" && "Manages all embedded systems and hardware integrations for Pranayuv’s smart devices."}
        {p.name === "Kushal Thandra" && "Architects scalable software systems and ensures smooth digital experience for end users."}
        {p.name === "Dr. Srinivasarao Gummadi" && "Provides strategic advisory leveraging decades of medical and academic excellence."}
      </p>
    
      {p.linkedin && (
        <a
          href={p.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md hover:from-blue-700 hover:to-purple-700 transition z-10 relative"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.7 0-1 .8-1.7 1.8-1.7s1.8.8 1.8 1.7c0 1-.8 1.7-1.8 1.7zm13.5 11.3h-3v-5.5c0-1.3-.5-2.1-1.6-2.1-.9 0-1.3.6-1.5 1.2-.1.2-.1.5-.1.7v5.7h-3s.1-9.3 0-10h3v1.4c.4-.6 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1v6z" />
          </svg>
          LinkedIn
        </a>
      )}
    </motion.div>
    
    ))}
  </div>
</section>


      {/* Recognitions Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 relative">
  <h2 className="text-3xl font-bold text-center text-blue-800 mb-16">
    Recognitions & Visitors
  </h2>

  {/* Swiper Container for Mobile and Tablet Views */}
  <div className="lg:hidden">
    <Swiper
      spaceBetween={50} // Increased space between slides
      slidesPerView={1}
      loop={true} // Infinite loop
      autoplay={{
        delay: 3000, // Auto-scroll delay
        disableOnInteraction: false, // Continue autoplay even after interaction
      }}
      breakpoints={{
        640: {
          slidesPerView: 2, // 2 slides on small screens
        },
        1024: {
          slidesPerView: 3, // 3 slides on medium screens
        },
        1280: {
          slidesPerView: 3, // 3 slides on larger screens
        },
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      className="swiper-container"
      touchRatio={1} // Enables swipe on mobile devices
    >
      {[ 
        {
          text: 'Padma Shri Chintakindi Mallesham appreciated our innovation (15-04-2024)',
          img: '/recognition1.png',
          details: 'Padma Shri Chintakindi Mallesham, a pioneering innovator, recognized our cutting-edge advancements in technology and development.',
        },
        {
          text: 'Dr. B. Koteswara Rao & Dr. P V Krishna Rao visited (28-04-2024)',
          img: '/recognition2.png',
          details: 'Dr. Koteswara Rao and Dr. P. V. Krishna Rao, eminent scholars, visited our team to offer guidance and appreciation.',
        },
        {
          text: 'KCP Cement HoDs & Bhavanarayana praised our work (26-04-2024)',
          img: '/recognition3.png',
          details: 'The Heads of Departments from KCP Cement, along with Mr. Bhavanarayana, praised our efforts in pioneering new technologies.',
        },
        {
          text: 'Dr. P V Radha Devi (ADRIN, ISRO) visited with team (03-05-2024)',
          img: '/recognition4.png',
          details: 'Dr. Radha Devi, from ISRO, acknowledged our innovative solutions during her visit, highlighting our potential in space-related applications.',
        },
        {
          text: 'Sri Yendamuri Veerendranath recognized our project (16-05-2024)',
          img: '/recognition5.png',
          details: 'Renowned author Sri Yendamuri Veerendranath visited and showed his appreciation for our innovative work.',
        },
        {
          text: 'Sri Kondapalli Srinivas (Minister) appreciated the team (16-09-2024)',
          img: '/recognition6.png',
          details: 'Minister Sri Kondapalli Srinivas visited our facility and praised the hard work and dedication of our team.',
        },
      ].map((item, i) => (
        <SwiperSlide key={i} className="flex justify-center items-center">
          <motion.div
            className="bg-white bg-opacity-40 backdrop-blur-lg p-8 rounded-xl shadow-xl flex flex-col items-center gap-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/10 pointer-events-none rounded-2xl"></div>
        
            <img
              src={item.img}
              alt={`Recognition ${i + 1}`}
              className="w-52 h-52 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <p className="text-base text-gray-700 text-center">{item.text}</p>
            <p className="text-sm text-gray-600 text-center mt-2">{item.details}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Grid Layout for Desktop View */}
  <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
    {[ 
      {
        text: 'Padma Shri Chintakindi Mallesham appreciated our innovation (15-04-2024)',
        img: '/recognition1.png',
        details: 'Padma Shri Chintakindi Mallesham, a pioneering innovator, recognized our cutting-edge advancements in technology and development.',
      },
      {
        text: 'Dr. B. Koteswara Rao & Dr. P V Krishna Rao visited (28-04-2024)',
        img: '/recognition2.png',
        details: 'Dr. Koteswara Rao and Dr. P. V. Krishna Rao, eminent scholars, visited our team to offer guidance and appreciation.',
      },
      {
        text: 'KCP Cement HoDs & Bhavanarayana praised our work (26-04-2024)',
        img: '/recognition3.png',
        details: 'The Heads of Departments from KCP Cement, along with Mr. Bhavanarayana, praised our efforts in pioneering new technologies.',
      },
      {
        text: 'Dr. P V Radha Devi (ADRIN, ISRO) visited with team (03-05-2024)',
        img: '/recognition4.png',
        details: 'Dr. Radha Devi, from ISRO, acknowledged our innovative solutions during her visit, highlighting our potential in space-related applications.',
      },
      {
        text: 'Sri Yendamuri Veerendranath recognized our project (16-05-2024)',
        img: '/recognition5.png',
        details: 'Renowned author Sri Yendamuri Veerendranath visited and showed his appreciation for our innovative work.',
      },
      {
        text: 'Sri Kondapalli Srinivas (Minister) appreciated the team (16-09-2024)',
        img: '/recognition6.png',
        details: 'Minister Sri Kondapalli Srinivas visited our facility and praised the hard work and dedication of our team.',
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="bg-white bg-opacity-40 backdrop-blur-lg p-8 rounded-xl shadow-xl flex flex-col items-center gap-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/10 pointer-events-none rounded-2xl"></div>
        <img
          src={item.img}
          alt={`Recognition ${i + 1}`}
          className="w-52 h-52 object-cover rounded-full border-4 border-white shadow-lg"
        />
        <p className="text-base text-gray-700 text-center">{item.text}</p>
        <p className="text-sm text-gray-600 text-center mt-2">{item.details}</p>
      </motion.div>
    ))}
  </div>

  {/* Swipe to Next (Only for Mobile View) */}
  <div className="text-center mt-4 lg:hidden text-blue-800">
    <p className="font-semibold text-lg">Swipe to Next</p>
  </div>

</section>










      {/* YouTube Video Section */}
      <section className="max-w-5xl mx-auto text-center px-4 py-12">
  <h2 className="text-3xl font-bold mb-4 text-blue-800">ETV Yuva Coverage</h2>
  <p className="text-gray-600 mb-8 mx-auto max-w-3xl">
    Watch our story featured on national television.
  </p>
  <div className="relative pb-[56.25%] w-full h-0 overflow-hidden rounded-xl shadow-lg mx-auto">
    <iframe
      src="https://www.youtube.com/embed/e9LKjmj4guk"
      title="Pranayuv on ETV Yuva"
      frameBorder="0"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full"
    />
  </div>
</section>

    </div>
  );
}
