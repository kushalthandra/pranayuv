import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav
        className="w-full fixed top-0 left-0 right-0 z-50 shadow-lg transition-all duration-300"
        style={{
          background: "rgba(15, 80, 145, 0.85)", // Glassy effect
          backdropFilter: "blur(15px)", // Smooth blur
          WebkitBackdropFilter: "blur(15px)", // Safari support
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)", // Subtle border
        }}
      >
        <div className="px-6 mx-auto max-w-7xl md:flex md:justify-between md:items-center md:px-10">
          <div className="flex items-center justify-between py-4">
            {/* LOGO */}
            <Link href="/" className="flex items-center justify-betweenspace-x-2">
              <Image src="/logo.png" alt="pranayuv logo" width={40} height={40} />
              <h2 className="text-2xl text-white font-bold tracking-wide">Pranayuv</h2>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-md focus:outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close1.svg" width={30} height={30} alt="close" />
                ) : (
                  <Image src="/menu.svg" width={30} height={30} alt="menu" />
                )}
              </button>
            </div>
          </div>

          {/* Navigation Menu */}
          <div
            className={`md:flex md:items-center md:space-x-6 ${
              navbar
                ? "absolute top-full left-0 w-full bg-blue-900 bg-opacity-90 shadow-lg py-4 rounded-md md:relative md:bg-transparent md:py-0"
                : "hidden md:flex"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 text-center">
              {[
                { name: "About Us", link: "/pagescomponents/about" },
                { name: "Blog & Updates", link: "/pagescomponents/Blogandupdates" },
                { name: "Products", link: "/pagescomponents/PRODUCTS" },
                { name: "Careers", link: "/pagescomponents/Careers" },
                { name: "Services", link: "/pagescomponents/SERVICES" },
                { name: "Contact", link: "/#contact", isAnchor: true },
              ].map(({ name, link, isAnchor }) => (
                <li
                  key={name}
                  className="py-3 px-6 text-lg text-white transition-all duration-300 md:py-2 md:px-4 hover:bg-white hover:text-blue-900 rounded-lg md:hover:bg-transparent"
                >
                  {isAnchor ? (
                    <a href={link} onClick={() => setNavbar(false)}>
                      {name}
                    </a>
                  ) : (
                    <Link href={link} onClick={() => setNavbar(false)}>
                      {name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
  