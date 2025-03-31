export default function BlogandUpdates() {
  return (
    <div className="min-h-screen bg-gray-200 text-black">
      {/* Navbar */}
      <nav className="bg-blue-900 p-4 flex flex-wrap justify-between items-center">
        <div className="text-xl font-bold">Pranayuv</div>
        <div className="space-x-4 flex flex-wrap justify-center md:space-x-6 text-sm md:text-base">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Blog & Updates</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Careers</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Blog Title */}
      <div className="h-80 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Blog & Updates</h1>
        <p className="text-md md:text-lg text-gray-700 mt-3 md:mt-4">Stay updated with the latest in medical technology</p>
      </div>

      {/* Blog Posts Section */}
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Sample Blog Card */}
          {[
            {
              img: "https://source.unsplash.com/400x250/?medical,technology",
              title: "Latest Innovations in Medical Tech",
              desc: "Explore the cutting-edge advancements shaping healthcare.",
            },
            {
              img: "https://source.unsplash.com/400x250/?doctor,medicine",
              title: "How AI is Transforming Healthcare",
              desc: "Discover the role of artificial intelligence in modern medicine.",
            },
            {
              img: "https://source.unsplash.com/400x250/?hospital,healthcare",
              title: "Necessary Medical Gadgets in 2025",
              desc: "Get to know the must-have medical devices for the future.",
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
            >
              <img
                src={blog.img}
                className="rounded-lg w-full h-48 object-cover"
                alt="blog"
              />
              <h2 className="text-lg md:text-xl font-bold mt-4">{blog.title}</h2>
              <p className="text-gray-500 mt-2 text-sm md:text-base">{blog.desc}</p>
              <a
                href="#"
                className="text-blue-500 mt-4 inline-block hover:underline text-sm md:text-base"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}