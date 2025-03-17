import { MdContactPhone } from "react-icons/md";
function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f5091" }} className="text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Grid */}
        <div className="footer-grid grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">           
         
          {/* Blogs Column */}
          <div className="border-b md:border-b-0 md:border-r border-white pb-4 md:pb-0 md:pr-6">
            <a href="/Blogandupdates" className="text-xl font-semibold mb-3 block underline hover:underline">Blogs</a>
            <ul>
              <li><a href="/link5" className="hover:underline">Sub Link 1</a></li>
              <li><a href="/link6" className="hover:underline">Sub Link 2</a></li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="border-b md:border-b-0 md:border-r border-white pb-4 md:pb-0 md:pr-6">
            <a href="/PRODUCTS" className="text-xl font-semibold mb-3 block underline hover:underline">Products</a>
            <ul>
              <li><a href="/link7" className="hover:underline">Sub Link 1</a></li>
              <li><a href="/link8" className="hover:underline">Sub Link 2</a></li>
            </ul>
          </div>
      
          {/* Services Column */}
          <div className="border-b md:border-b-0 md:border-r border-white pb-4 md:pb-0 md:pr-6">
            <a href="/SERVICES" className="text-xl font-semibold mb-3 block underline hover:underline">Service</a>
            <ul>
              <li><a href="/link9" className="hover:underline">Sub Link 1</a></li>
              <li><a href="/link10" className="hover:underline">Sub Link 2</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div id="contact" className="pt-5">
            <button className="px-2 py-1 bg-white text-blue-800 font-semibold text-lg rounded-lg hover:bg-blue-200 transition animate-fadeInUp">               
              <a href="/pagescomponents/contact" className="text-xl font-semibold underline hover:underline flex justify-center items-center gap-2 mr-2">
                Contact <MdContactPhone />
              </a>                        
            </button>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-center mt-6 text-sm opacity-75">
          © {new Date().getFullYear()} Pranayuv. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
  export default Footer;