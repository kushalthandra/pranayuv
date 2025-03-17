export default function About() {
  return (
    <section className="bg-[#ccd8e9] pt-24 py-16 px-6 min-h-screen pb-25">
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
      
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="/iot.jpeg" 
          alt="Our Story" 
          className="w-full max-w-sm h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        />
      </div>
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left animate-fadeIn">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 underline">Our Story</h2>
        <ul className="list-disc list-inside text-md text-gray-700 leading-loose">
          <li>Founded in 2025, Pranaayuv is on a mission to revolutionize healthcare accessibility through cutting-edge technology and AI-driven solutions.</li>
          <li>Headquartered in India, Pranaayuv was created to bridge the gap between patients, hospitals, and diagnostic centers, ensuring seamless healthcare management for all.</li>
          <li>With a deep passion for health-tech innovation, our founders envisioned a platform that empowers small hospitals, clinics, and labs with the latest in AI, automation, and IoT-powered healthcare solutions.</li>
          <li>Our journey began with the launch of Pranaayuv App, an all-in-one platform that simplifies appointment booking, diagnostic test scheduling, and hospital automation.</li>
          <li>Now, we are expanding our solutions to include AI-powered smart devices, IoT-driven patient monitoring, and personalized digital healthcare experiences.</li>
        </ul>
      </div> 
    </div>
  </section>
  
  );
}

  