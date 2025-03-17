import Link from 'next/link';
// Array of slide objects, each containing an id, title, description, image, and link
const slides = [
  { id: 1, title: 'Latest Updates & Product Releases', description: 'Discover.', image: '/sbg-img1.jpeg', link: '/home/updates' },
  { id: 2, title: 'AI & IoT Innovations', description: 'Next-gen healthcare technology.', image: '/sbg-img2.jpeg', link: '/home/ai-iot' },
  { id: 3, title: 'Seamless Hospital Management', description: 'Digitizing medical records.', image: '/sbg-img3.jpeg', link: '/home/hospitals' },
  { id: 4, title: 'Smart Health Monitoring', description: 'Real-time AI-powered insights.', image: '/sbg-img2.jpeg', link: '/home/monitoring' },
  { id: 5, title: 'Internship & Training Programs', description: 'Learn from industry experts.', image: '/sbg-img1.jpeg', link: '/home/internships' },
];
    export default function ScrollSection() {
        return (
          <section className="bg-[#ccd8e3]">
                    {/*
                       Mapping through the 'slides' array using .map()
                        - .map() is a JavaScript function that loops through an array and returns a new array with transformed elements.
                        - Here, it creates a div for each slide dynamically.
                        - 'slide' represents each object in the 'slides' array, while 'index' is its position in the array.
                  */}
            {slides.map((slide, index) => (
              <div 
                key={slide.id} // Unique key to help React track list items efficiently
                className={`relative w-full min-h-screen flex items-center justify-start text-white px-10 md:px-20 lg:px-32 bg-cover bg-center transition-opacity duration-700 ${
                  index % 2 === 0 ? 'bg-black bg-opacity-60' : 'bg-gray-800 bg-opacity-60'
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}// Dynamically setting background image for each slide
              >
                {/* 
                   Dark Overlay for better text readability
                    - 'absolute inset-0' makes the overlay cover the entire div.
                    - 'bg-black bg-opacity-50' adds a semi-transparent black overlay.
               */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
                {/* Content */}
                <div className="relative z-10 max-w-2xl">
                    {/* Slide Title - 'animate-fadeInUp' applies an animation effect to fade in and move text upward smoothly.
                   */}
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">{slide.title}</h2>
                  <p className="text-lg md:text-xl mb-6 animate-fadeInUp">{slide.description}</p>
                            {/* 
                             Read more Button
                             - Clicking the button navigates to a specific page using 'slide.link'.
                             - 'hover:bg-blue-700' changes the button color on hover.
                             - 'animate-fadeInUp' makes the button fade in smoothly.
                           */}
                  <Link href={slide.link}>
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition animate-fadeInUp">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </section>
  );
}
