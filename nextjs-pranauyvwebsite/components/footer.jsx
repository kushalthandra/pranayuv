import { MdContactPhone } from "react-icons/md";
import Link from 'next/link';

function Footer() {
  return (
    <footer className="text-white py-12 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-600/80 shadow-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Grid */}
        <div className="footer-grid grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Blogs Column */}
          <div className="border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-6">
            <a href="/Blogandupdates" className="text-2xl font-semibold mb-3 block hover:text-cyan-300 transition-transform transform hover:scale-105">Blogs</a>
            <ul className="space-y-1 text-white/80">
              <li><a href="/link5" className="hover:underline hover:text-white">Sub Link 1</a></li>
              <li><a href="/link6" className="hover:underline hover:text-white">Sub Link 2</a></li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-6">
            <a href="/PRODUCTS" className="text-2xl font-semibold mb-3 block hover:text-cyan-300 transition-transform transform hover:scale-105">Products</a>
            <ul className="space-y-1 text-white/80">
              <li><a href="/link7" className="hover:underline hover:text-white">Sub Link 1</a></li>
              <li><a href="/link8" className="hover:underline hover:text-white">Sub Link 2</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-6">
            <a href="/SERVICES" className="text-2xl font-semibold mb-3 block hover:text-cyan-300 transition-transform transform hover:scale-105">Services</a>
            <ul className="space-y-1 text-white/80">
              <li><a href="/link9" className="hover:underline hover:text-white">Sub Link 1</a></li>
              <li><a href="/link10" className="hover:underline hover:text-white">Sub Link 2</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div id="contact" className="pt-5">
            <Link href="/pagescomponents/contact" legacyBehavior>
              <a className="inline-flex items-center justify-center px-5 py-3 bg-white text-blue-800 font-bold text-lg rounded-lg hover:bg-blue-200 hover:scale-105 transition-transform duration-300 shadow-md">
                Contact <MdContactPhone className="ml-2 text-2xl" />
              </a>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-white/60">
          © {new Date().getFullYear()} Pranayuv. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
