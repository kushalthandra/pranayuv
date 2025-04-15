// components/NavBar.js
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FaUserCircle, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }

    if (profileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileOpen]);

  const handleNavigate = (path) => {
    setProfileOpen(false);
    router.push(path);
  };

  return (
    <header className="z-50 fixed w-full top-0">
      <nav
        className="backdrop-blur-md bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-600/80 border-b border-white/10 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Pranayuv Logo" width={40} height={40} />
              <span className="text-white text-2xl font-semibold tracking-wide">Pranayuv</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-8 text-white text-base font-medium">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/pagescomponents/about" },
                { name: "Products", link: "/pagescomponents/PRODUCTS" },
                { name: "Careers", link: "/pagescomponents/Careers" },
                { name: "Services", link: "/pagescomponents/SERVICES" },
                { name: "Contact", link: "/#contact", isAnchor: true },
              ].map(({ name, link }) => (
                <Link key={name} href={link} className="hover:text-cyan-300 transition-all duration-200">
                  {name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button onClick={() => setProfileOpen(true)} className="text-white text-2xl">
                <FaUserCircle />
              </button>
              <button className="md:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Image src={navbarOpen ? "/close1.svg" : "/menu.svg"} alt="menu" width={28} height={28} />
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {navbarOpen && (
            <div className="md:hidden pb-4">
              <ul className="flex flex-col gap-3 text-white text-base animate-fade-in-down">
                {[
                  { name: "Home", link: "/" },
                  { name: "About Us", link: "/pagescomponents/about" },
                  { name: "Products", link: "/pagescomponents/PRODUCTS" },
                  { name: "Careers", link: "/pagescomponents/Careers" },
                  { name: "Services", link: "/pagescomponents/SERVICES" },
                  { name: "Contact", link: "/#contact", isAnchor: true },
                ].map(({ name, link }) => (
                  <li key={name}>
                    <Link
                      href={link}
                      className="block px-4 py-2 rounded-md hover:bg-white/10 transition"
                      onClick={() => setNavbarOpen(false)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Profile Modal */}
      {profileOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-sm" onClick={() => setProfileOpen(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              ref={modalRef}
              className="relative w-full max-w-md p-8 rounded-3xl border border-white/30 bg-white/10 backdrop-blur-2xl shadow-2xl text-white text-center"
            >
              <button onClick={() => setProfileOpen(false)} className="absolute top-4 right-4 text-white hover:text-red-400">
                <FaTimes />
              </button>
              <h2 className="text-3xl font-bold mb-4">Welcome</h2>
              <p className="text-sm text-white/70 mb-6">Choose your action</p>
              <div className="flex justify-between gap-6">
                <button
                  onClick={() => handleNavigate('/login')}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl"
                >
                  Login
                </button>
                <button
                  onClick={() => handleNavigate('/signup')}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default NavBar;
